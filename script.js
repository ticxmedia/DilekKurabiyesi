// Kurabiye görseli rastgele gösterimi
const kurabiyeImg = document.getElementById("kurabiye-img");
const cookieOptions = ["dilekkurabiyesipng_left.png", "dilekkurabiyesipng_right.png"];
kurabiyeImg.src = cookieOptions[Math.floor(Math.random() * cookieOptions.length)];

// Ses otomatik çal
const audio = document.getElementById("cookie-audio");
window.addEventListener("load", () => {
  setTimeout(() => audio.play(), 500);
});

// Dilek metnini JSON'dan çek
fetch("wishes.json")
  .then(res => res.json())
  .then(data => {
    const wishes = data.wishes;
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("dilek-metin").innerHTML = `🌠 Senin bugünkü dileğin: <strong>${randomWish}</strong>`;
  })
  .catch(() => {
    document.getElementById("dilek-metin").textContent = "🌠 Dilek yüklenemedi.";
  });

// Unsplash API ile arka plan görseli çek
fetch("https://api.unsplash.com/photos/random?query=stars&orientation=landscape&client_id=Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM")
  .then(res => res.json())
  .then(data => {
    document.getElementById("arka-img").src = data.urls.full;
  })
  .catch(() => {
    document.getElementById("arka-img").src = "arkaplan.jpg"; // yedek görsel
  });

// Görüntü yakalama
function captureAndShowPopup() {
  html2canvas(document.getElementById("dilek-alani"), {
    useCORS: true,
    backgroundColor: null
  }).then(canvas => {
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
