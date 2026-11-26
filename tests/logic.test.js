const test = require("node:test");
const assert = require("node:assert/strict");
const { kalanGun, kalanMetni, aciliyet, sirala } = require("../logic.js");

const bugun = new Date(2026, 10, 26); // 26 Kasım 2026, yerel saat

test("kalanGun: gelecek, bugün ve geçmiş tarihler", () => {
  assert.equal(kalanGun("2026-11-29", bugun), 3);
  assert.equal(kalanGun("2026-11-26", bugun), 0);
  assert.equal(kalanGun("2026-11-20", bugun), -6);
});

test("kalanGun: ay/yıl geçişi, artık yıl ve günün saati sonucu değiştirmez", () => {
  assert.equal(kalanGun("2027-01-01", bugun), 36);
  assert.equal(kalanGun("2028-03-01", new Date(2028, 1, 28)), 2);
  assert.equal(kalanGun("2026-11-27", new Date(2026, 10, 26, 23, 59)), 1);
});

test("kalanMetni", () => {
  assert.equal(kalanMetni(5), "5 gün kaldı");
  assert.equal(kalanMetni(0), "Bugün teslim");
  assert.equal(kalanMetni(-2), "2 gün gecikti");
});

test("aciliyet: 3 gün ve altı yakın, geçmiş tarih gecikti", () => {
  assert.equal(aciliyet(4), "");
  assert.equal(aciliyet(3), "yakin");
  assert.equal(aciliyet(0), "yakin");
  assert.equal(aciliyet(-1), "gecikti");
});

test("sirala: en yakın teslim en üstte, asıl dizi değişmez", () => {
  const liste = [{ teslim: "2026-12-10" }, { teslim: "2026-11-30" }, { teslim: "2027-01-05" }];
  assert.deepEqual(sirala(liste).map((o) => o.teslim), ["2026-11-30", "2026-12-10", "2027-01-05"]);
  assert.equal(liste[0].teslim, "2026-12-10");
});
