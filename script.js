const unsplashAccessKey = "Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM";

// ✅ Doğadan görsel çek
async function fetchBackgroundImage() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${unsplashAccessKey}`
    );
    const data = await response.json();
    const imageUrl = data.urls.full;

    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  } catch (error) {
    console.error("Arka plan görseli alınamadı:", error);
  }
}

// ✅ Aynı dizindeki `niyetler.json` dosyasından niyet çek
async function fetchNiyet() {
  try {
    const response = await fetch(`niyetler.json?v=${Date.now()}`);
    const data = await response.json();
    const niyetler = data.niyetler;

    const rasgele = Math.floor(Math.random() * niyetler.length);
    const niyetElement = document.getElementById("niyet");
    if (niyetElement) {
      niyetElement.innerText = niyetler[rasgele];
    }
  } catch (error) {
    console.error("Niyet JSON verisi alınamadı:", error);
    document.getElementById("niyet").innerText = "Bugün yeni bir başlangıca hazır ol!";
  }
}

// ✅ Sayfa yüklenince çalıştır
window.addEventListener("DOMContentLoaded", () => {
  fetchBackgroundImage();
  fetchNiyet();
});
