const unsplashAccessKey = "Ep6jy0GfSXBhRqWuV3h2STQSnzjIQHRxnRf42ostnnM";


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


async function fetchNiyet(){
  try {
    const response = await fetch(`niyetler.json?v=${Date.now()}`, { mode: 'cors', cache: 'no-cache' });
    const data = await response.json();
    console.log(data.niyetler); // Konsolda niyetler dizisi görünsün
    const rasgele = Math.floor(Math.random() * data.niyetler.length);
    document.getElementById("niyet").innerText = data.niyetler[rasgele];
  } catch(error){
    console.error("JSON çekilemedi:", error);
  }
}



window.addEventListener("DOMContentLoaded", () => {
  fetchBackgroundImage();
  fetchNiyet();
});
