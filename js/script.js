const images = document.querySelectorAll(".plusImg");
const showParagh = document.querySelectorAll(".answer-paragh");

const updateVisibility = () => {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      showParagh.forEach((el) => el.classList.toggle("hide"));
      images.classList.toggle("active");
    });
  });
  return;
};
updateVisibility();
