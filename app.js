const ANAHTAR = "odev-takip";
const form = document.getElementById("odev-form");
const liste = document.getElementById("liste");
const bos = document.getElementById("bos");
const uyari = document.getElementById("uyari");
const sablon = document.getElementById("odev-sablon");
const duyuruAlani = document.getElementById("duyuru");

function yukle() {
  try {
    return JSON.parse(localStorage.getItem(ANAHTAR)) ?? [];
  } catch {
    return [];
  }
}

function kaydet() {
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify(odevler));
  } catch {
    uyari.hidden = false; // gizli sekme vb.: kullanıcı verinin kalıcı olmadığını bilsin
  }
}

let odevler = yukle();

// Ekran okuyucuya kısa mesaj; bekleme, odaklanan alanın okunmasıyla çakışmasın diye.
let duyuruZamani;
function duyur(metin) {
  clearTimeout(duyuruZamani);
  duyuruAlani.textContent = "";
  duyuruZamani = setTimeout(() => { duyuruAlani.textContent = metin; }, 500);
}

function satir(odev) {
  const li = sablon.content.firstElementChild.cloneNode(true);
  li.querySelector(".baslik").textContent = odev.baslik;
  li.querySelector(".ders").textContent = odev.ders;
  const tarih = li.querySelector(".tarih");
  tarih.dateTime = odev.teslim;
  tarih.textContent = odev.teslim.split("-").reverse().join(".");
  const gun = kalanGun(odev.teslim);
  li.querySelector(".kalan").textContent = kalanMetni(gun);
  if (aciliyet(gun)) li.classList.add(aciliyet(gun));
  const sil = li.querySelector(".sil");
  sil.setAttribute("aria-label", `${odev.baslik} ödevini sil`);
  sil.addEventListener("click", () => {
    odevler = odevler.filter((o) => o.id !== odev.id);
    kaydet();
    goster();
    document.getElementById("liste-baslik").focus(); // silinen düğmeyle birlikte odak kaybolmasın
    duyur("Ödev silindi.");
  });
  return li;
}

function goster() {
  liste.replaceChildren(...sirala(odevler).map(satir));
  bos.hidden = odevler.length > 0;
}

// Tarayıcı geçersiz formu göndermez; submit yalnızca tüm alanlar geçerliyken tetiklenir.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const veri = new FormData(form);
  odevler.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    ders: veri.get("ders").trim(),
    baslik: veri.get("baslik").trim(),
    teslim: veri.get("teslim"),
  });
  kaydet();
  goster();
  form.reset();
  form.elements.ders.focus();
  duyur("Ödev eklendi.");
});

// Erişilebilirlik: aria-invalid'i görsel :user-invalid durumuyla eşitle, hatayı alanla ilişkilendir.
function ariaEsitle(alan, sesli = false) {
  if (!alan.matches?.("input")) return;
  const hatali = alan.matches(":user-invalid");
  if (hatali && sesli && alan.getAttribute("aria-invalid") !== "true") {
    duyur(`${alan.labels[0].textContent}: ${document.getElementById(alan.dataset.error).textContent}`);
  }
  alan.setAttribute("aria-invalid", hatali);
  if (hatali) alan.setAttribute("aria-describedby", alan.dataset.error);
  else alan.removeAttribute("aria-describedby");
}

const alanlar = () => form.querySelectorAll("input");
alanlar().forEach((a) => ariaEsitle(a));
form.addEventListener("blur", (e) => ariaEsitle(e.target, true), true);
form.addEventListener("change", (e) => ariaEsitle(e.target, true));
form.addEventListener("input", (e) => ariaEsitle(e.target));
form.addEventListener("invalid", (e) => ariaEsitle(e.target), true); // invalid olayı kabarcıklanmaz
form.addEventListener("reset", () => setTimeout(() => alanlar().forEach((a) => ariaEsitle(a))));

goster();
