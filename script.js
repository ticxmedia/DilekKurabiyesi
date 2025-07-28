// Manzara API — her yenilemede veya NFC tetiklendiğinde arka plan değişir
const apiKey = "Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM";
fetch(`https://api.unsplash.com/photos/random?query=landscape&orientation=portrait&client_id=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("manzara").src = data.urls.regular;
  })
  .catch(() => {
    document.getElementById("manzara").src = "yedek.jpg";
  });

// Dilek havuzu
const dilekler = [
  "Yeni başlangıçlar için cesaret seninle olsun 🌱",
  "Her şey gönlünce olsun 🍀",
  "Bugün senin ışığınla parlayacak ✨",
  "Gülümsemelerin hiç bitmesin 🌈"
];

const rastgele = dilekler[Math.floor(Math.random() * dilekler.length)];
document.getElementById("dilek-metin").textContent = `✨ Senin bugünkü dileğin:\n${rastgele}`;

// Paylaş butonu — html2canvas ile ekran görüntüsü ve kaydet
document.getElementById("paylas-btn").addEventListener("click", () => {
  html2canvas(document.getElementById("capture-alani")).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "dilek-paylasimi.png";
    link.click();
    alert("Görsel kaydedildi! Instagram ve WhatsApp'ta paylaşmaya hazır 🎉");
  });
});

