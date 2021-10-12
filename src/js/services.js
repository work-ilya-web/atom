const allcontainer = gsap.utils.toArray(".services__item");
const venueImageWrap = document.querySelector(".cursor");
const venueImage = document.querySelector(".cursor__img");

function initcontainer() {
  allcontainer.forEach((link) => {
    link.addEventListener("mouseenter", venueHover);
    link.addEventListener("mouseleave", venueHover);
    link.addEventListener("mousemove", moveVenueImage);
  });
}

function moveVenueImage(e) {
  let xpos = e.clientX;
  let ypos = e.clientY;
  const tl = gsap.timeline();
  tl.to(venueImageWrap, {
    x: xpos,
    y: ypos
  });
}

function venueHover(e) {
  if (e.type === "mouseenter") {
    const targetImage = e.target.dataset.img;

    const tl = gsap.timeline();
    tl.set(venueImage, {
      backgroundImage: `url(${targetImage})`
    }).to(venueImageWrap, {
      duration: 0.5,
      autoAlpha: 1
    });
  } else if (e.type === "mouseleave") {
    const tl = gsap.timeline();
    tl.to(venueImageWrap, {
      duration: 0.5,
      autoAlpha: 0
    });
  }
}

function init() {
  initcontainer();
}

window.addEventListener("load", function () {
  init();
});