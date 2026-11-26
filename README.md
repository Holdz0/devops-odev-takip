# Ödev Takip

Üniversite öğrencilerinin farklı derslerden gelen ödevlerini ve teslim tarihlerini tek bir yerde takip etmesini sağlayan, kurulum gerektirmeyen basit bir web uygulaması (HTML, CSS, JavaScript).

## Hangi problemi çözüyor, kimin için?

Öğrenciler bir dönem boyunca birçok dersten ödev alır. Teslim tarihleri ders sistemleri, e-postalar ve mesaj grupları arasında dağılır, bu yüzden kolayca gözden kaçar. **Ödev Takip**, ödevleri ders, başlık ve teslim tarihiyle kaydeder ve hangisinin teslimi yaklaştığını tek bakışta gösterir.

**Hedef kullanıcı:** Aynı dönemde birden fazla dersin ödevini yürüten üniversite öğrencileri.

## İş takip panosu

Görevler, açıklamaları ve kabul kriterleri: **https://github.com/users/Holdz0/projects/4**

Pano sütunları: **Yapılacak → Devam Ediyor → Tamamlandı**. Her kart bir GitHub issue'sudur.

## Çalıştırma

Kurulum veya derleme gerekmez.

- **Canlı demo:** https://holdz0.github.io/devops-odev-takip/
- **Yerelde:**
  1. `git clone https://github.com/Holdz0/devops-odev-takip.git`
  2. `devops-odev-takip` klasöründeki `index.html` dosyasını tarayıcıda açın (çift tıklamak yeterli).

Ödevler tarayıcının `localStorage` alanında saklanır; sunucu veya veritabanı yoktur.

## Özellikleri deneme

### 1. Ödev ekleme, listeleme ve silme ([#1](https://github.com/Holdz0/devops-odev-takip/issues/1))

1. **Ders**, **Ödev** ve **Teslim tarihi** alanlarını doldurup **Ekle**'ye basın → ödev "Ödevlerim" listesinde görünür ve form temizlenir.
2. Bir alanı boş bırakıp **Ekle**'ye basın → ödev eklenmez, boş alan kırmızıya döner ve altında hata mesajı çıkar.
3. Bir ödevin yanındaki **Sil**'e basın → ödev listeden kalkar.
4. Sayfayı yenileyin (F5) → eklenen ödevler yerinde durur.

### 2. Kalan gün sayacı ve teslim tarihine göre sıralama ([#2](https://github.com/Holdz0/devops-odev-takip/issues/2))

1. Teslim tarihleri farklı birkaç ödevi **karışık sırayla** ekleyin; örneğin 10 gün sonrası, dün, bugün ve 2 gün sonrası.
2. Liste ekleme sırasından bağımsız olarak teslim tarihi en yakın olan en üstte olacak şekilde sıralanır.
3. Her ödevin yanında "10 gün kaldı", "Bugün teslim" veya "1 gün gecikti" etiketi görünür.
4. Teslimine 3 gün veya daha az kalan ödevler (bugün dahil) sarı, tarihi geçmiş ödevler kırmızı sol kenarlık ve etiketle gösterilir.

Tarih hesaplarının birim testleri ([Node.js](https://nodejs.org) 18 veya üstü gerekir, ek paket kurulmaz):

```sh
node --test
```

## Proje yapısı

| Dosya | Görevi |
| --- | --- |
| `index.html` | Sayfa yapısı: form ve ödev listesi |
| `style.css` | Görünüm (açık/koyu tema) |
| `app.js` | Form, liste, silme ve `localStorage` işlemleri |
| `logic.js` | Kalan gün, aciliyet ve sıralama hesapları |
| `tests/logic.test.js` | `logic.js` için birim testleri |

## Geliştirme süreci

Her görev panoda bir karttır (GitHub issue) ve kartta açıklama ile kabul kriterleri bulunur. Bir göreve başlanınca kart **Devam Ediyor** sütununa alınır, iş ayrı bir dalda (`feature/...`) geliştirilir ve pull request ile `main` dalına birleştirilir. Kabul kriterleri doğrulandıktan sonra kriterler kartta işaretlenir, PR ve commit bağlantıları karta eklenir ve kart **Tamamlandı** sütununa taşınır.
