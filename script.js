// Unsplash API'den rastgele doğa fotoğrafı çek
const accessKey = Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM; // Buraya kendi API anahtarını gir
fetch(`https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${accessKey}`)
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
  });

// Dilekleri JSON dosyasından çek
fetch('wishes.json')
  .then(response => response.json())
  .then(data => {
    const wish = data.wishes[Math.floor(Math.random() * data.wishes.length)];
    document.getElementById('wishText').textContent = wish;
  });
