function showSurprise() {
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function enterSite() {

  const intro = document.querySelector(".intro-screen");

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);

}