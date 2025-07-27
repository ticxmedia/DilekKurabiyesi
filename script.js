// Kurabiye görseli rastgele gösterimi
const kurabiyeImg = document.getElementById("kurabiye-img");
const cookieOptions = ["dilekkurabiyesipng_left.png", "dilekkurabiyesipng_right.png"];
kurabiyeImg.src = cookieOptions[Math.floor(Math.random() * cookieOptions.length)];

// Ses otomatik çal
const audio = document.getElementById("cookie-audio");
window.addEventListener("load", () => {
  setTimeout(() => audio.play(), 500);
});

// Dinamik dilek metni çekme
fetch("wishes.json")
  .then(response => response.json())
  .then(data => {
    const wishes = data.wishes;
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("dilek-metin").innerHTML = `🌠 Senin bugünkü dileğin: <strong>${randomWish}</strong>`;
  })
  .catch(error => {
    document.getElementById("dilek-metin").textContent = "🌠 Dilek yüklenemedi.";
    console.error("Dilek verisi alınamadı:", error);
  });

// Görsel ve popup göster
function captureAndShowPopup() {
  const targetDiv = document.getElementById("dilek-alani");
  html2canvas(targetDiv).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    document.getElementById("screenshot").src = imgData;
    document.getElementById("popup").style.display = "block";
  });
}

function downloadImage() {
  const link = document.createElement("a");
  link.href = document.getElementById("screenshot").src;
  link.download = "dilek-kurabiyesi.png";
  link.click();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
const wishes = [
  "Hayat sana gülümsesin!",
  "Bugün senin günün!",
  "Güzel şeyler seni bulsun!",
  "Şans hep seninle olsun!",
  "Kalbinin dileği gerçek olsun!"
];
const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
document.getElementById("dilek-metin").innerHTML = `🌠 Senin bugünkü dileğin: <strong>${randomWish}</strong>`;

