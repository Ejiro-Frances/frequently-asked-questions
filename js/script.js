const faqContainers = document.querySelectorAll(".question-main-container");

faqContainers.forEach((container) => {
  // Find the specific image and paragraph within this container
  const img = container.querySelector(".plusImg");
  const paragraph = container.querySelector(".answer-paragh");

  img.addEventListener("click", () => {
    // Toggle visibility of the paragraph
    paragraph.classList.toggle("hide");

    // Toggle the 'active' class on the image to switch icons
    img.classList.toggle("active");

    // Change the image source based on the active class
    if (img.classList.contains("active")) {
      img.src = "./assets/images/icon-minus.svg"; // Set to minus image
    } else {
      img.src = "./assets/images/icon-plus.svg"; // Set back to plus image
    }
  });
});
