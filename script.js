const slidersContainer = document.getElementById("slidersContainer");
const slide = document.getElementById(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidersContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });