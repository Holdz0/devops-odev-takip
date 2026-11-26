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
