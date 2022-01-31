const bannerWrap = document.querySelector(".banner-wrap");
const next = document.querySelector(".banner-arrow .next");
const prev = document.querySelector(".banner-arrow .prev");
const spans = document.querySelectorAll(".banner-span span");
console.log(bannerWrap, next, prev);

let marginLeft = 0;
next.addEventListener("click", () => {
  if (marginLeft >= -100) {
    marginLeft -= 100;
    bannerWrap.style.marginLeft = marginLeft + "%";
  }
});

prev.addEventListener("click", () => {
    if (-100 >= marginLeft) {
      marginLeft += 100;
      bannerWrap.style.marginLeft = marginLeft + "%";
    }
  });
  