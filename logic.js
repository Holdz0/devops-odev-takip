// Tarih hesapları. Tarayıcıda app.js tarafından, Node'da testler tarafından kullanılır.
const GUN_MS = 86400000;

// "YYYY-AA-GG" tarihini gün numarasına çevirir. UTC kullanılır ki saat dilimi ve yaz saati sonucu kaydırmasın.
function gunNo(yil, ay, gun) {
  return Date.UTC(yil, ay - 1, gun) / GUN_MS;
}

function kalanGun(teslim, bugun = new Date()) {
  const [yil, ay, gun] = teslim.split("-").map(Number);
  return gunNo(yil, ay, gun) - gunNo(bugun.getFullYear(), bugun.getMonth() + 1, bugun.getDate());
}

function kalanMetni(gun) {
  if (gun === 0) return "Bugün teslim";
  return gun > 0 ? `${gun} gün kaldı` : `${-gun} gün gecikti`;
}

// Teslimine 3 gün veya daha az kalan "yakin", tarihi geçen "gecikti".
function aciliyet(gun) {
  if (gun < 0) return "gecikti";
  return gun <= 3 ? "yakin" : "";
}

// "YYYY-AA-GG" metinleri alfabetik sırada da kronolojiktir.
function sirala(odevler) {
  return [...odevler].sort((a, b) => (a.teslim > b.teslim) - (a.teslim < b.teslim));
}

if (typeof module !== "undefined") module.exports = { kalanGun, kalanMetni, aciliyet, sirala };
