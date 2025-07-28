// Arka planı Unsplash'tan rastgele çek
const accessKey = 'Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM';
fetch(`https://api.unsplash.com/photos/random?query=stars&orientation=portrait&client_id=${accessKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("arka-img").src = data.urls.regular;
  })
  .catch(() => {
    document.getElementById("arka-img").src = "arkaplan.jpg"; // yedek görsel
  });

// Dilek metnini JSON'dan çek
fetch("wishes.json")
  .then(res => res.json())
  .then(data => {
    const wishes = data.wishes;
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("dilek-metin").innerHTML = `✨ Senin bugünkü dileğin: ${randomWish}`;
  })
  .catch(() => {
    document.getElementById("dilek-metin").textContent = "✨ Dilek yüklenemedi.";
  });
