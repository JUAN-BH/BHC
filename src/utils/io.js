const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function loadImg(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.parentNode.classList.remove("skeleton");
      entry.target.parentNode.classList.add("show");
      const movieImg = entry.target.getAttribute("data-src").includes("null")
        ? movieDefault
        : entry.target.getAttribute("data-src");
      entry.target.setAttribute("src", movieImg);
    }
  });
}

export const observerImgSlider = new IntersectionObserver(loadImg, options);
