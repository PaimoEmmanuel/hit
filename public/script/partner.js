const nextButton = document.querySelector(".next-btn");
const backButton = document.querySelector(".back-btn");
const submitBtn = document.querySelector(".submit-btn");
const formSections = document.querySelectorAll(".form-section");

const tabHeadings = document.querySelectorAll(".tab-headings h3");
tabHeadings[1].style.opacity = "0.2";
tabHeadings[2].style.opacity = "0.2";
let index = 0;
nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  formSections[index].classList.add("form-section-2");
  formSections[index + 1].classList.remove("form-section-2");
  backButton.classList.remove("form-section-2");
  tabHeadings[index + 1].style.opacity = "1";
  tabHeadings[index].style.opacity = "0.2";
  index++;
  if (index === 2) {
    submitBtn.classList.remove("form-section-2");
    nextButton.classList.add("form-section-2");
  }
});

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  formSections[index - 1].classList.remove("form-section-2");
  formSections[index].classList.add("form-section-2");

  submitBtn.classList.add("form-section-2");
  nextButton.classList.remove("form-section-2");
  tabHeadings[index].style.opacity = "0.2";
  tabHeadings[index - 1].style.opacity = "1";
  index--;
  if (index < 1) {
    backButton.classList.add("form-section-2");
  }
});
