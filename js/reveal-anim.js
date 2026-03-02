/* DiGrano Hero Reveal Animation */

document.addEventListener("DOMContentLoaded", function () {

  const style = document.createElement("style");
  style.textContent = `
    .hero-anim {
      opacity: 0;
      transform: translateY(36px);
      transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .hero-anim-left {
      opacity: 0;
      transform: translateX(-48px);
      transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .hero-anim-right {
      opacity: 0;
      transform: translateX(48px);
      transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .hero-anim-pop {
      opacity: 0;
      transform: scale(0.88) translateY(16px);
      transition: opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
                  transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .hero-revealed {
      opacity: 1 !important;
      transform: none !important;
    }
  `;
  document.head.appendChild(style);

  const heroSection = document.querySelector(".hero-heading-left");
  if (!heroSection) return;

  const heading1  = heroSection.querySelector(".heading");
  const heading2  = heroSection.querySelector(".heading-2");
  const paragraph = heroSection.querySelector(".margin-bottom-24px");
  const buttons   = heroSection.querySelectorAll(".special-button");
  const ovenImg   = heroSection.querySelector(".oven-hero-container");
  const checkers  = heroSection.querySelector(".vertical-checkers");

  const sequence = [
    { el: heading1,    cls: "hero-anim-left",  delay: 500  },
    { el: heading2,    cls: "hero-anim-left",  delay: 700 },
    { el: paragraph,   cls: "hero-anim",       delay: 800 },
    { el: buttons[0],  cls: "hero-anim-pop",   delay: 900 },
    { el: buttons[1],  cls: "hero-anim-pop",   delay: 1100 },
    { el: ovenImg,     cls: "hero-anim-right", delay: 300 },
    { el: checkers,    cls: "hero-anim-right", delay: 500 },
];

  sequence.forEach(({ el, cls }) => {
    if (el) el.classList.add(cls);
  });

  requestAnimationFrame(() => {
    sequence.forEach(({ el, delay }) => {
      if (!el) return;
      setTimeout(() => el.classList.add("hero-revealed"), delay);
    });
  });
});