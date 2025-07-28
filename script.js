const unsplashAccessKey = "Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM";

// Doğa temalı arka plan görseli çek
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

// Rastgele niyet metni seç
async function fetchNiyet() {
  const niyetler = [
    "Doğayla uyum içinde olacağım.",
    "Her nefeste yenileniyorum.",
    "Hayatın ritmine güveneceğim.",
    "Güzellikleri fark edeceğim.",
    "Bugün kendi ışığımı yayacağım."
  ];

  const rasgele = Math.floor(Math.random() * niyetler.length);
  const niyetElement = document.getElementById("niyet");

  if (niyetElement) {
    niyetElement.innerText = niyetler[rasgele];
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetchBackgroundImage();
  fetchNiyet();
});
