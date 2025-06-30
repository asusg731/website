
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 150);
  });
});

function contactMe() {
  window.location.href = "mailto:sahilparmarrealem@gmail.com";
}
