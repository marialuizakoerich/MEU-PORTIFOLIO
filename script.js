gsap.registerPlugin(ScrollTrigger); 

//SCROOL
ScrollSmoother.create({
  smooth: 2,
  effects: true,
});

//ANIMAÇÃO IMAGENS DA HERO
gsap.fromTo(".tec_img",
  { y: -30 },
  {
    y: 10,
    duration: 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  }
);


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true
});


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    smoother.scrollTo(target, true, "top top");
  });
});