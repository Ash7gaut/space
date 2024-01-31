gsap.fromTo(
  ".nebul",
  {
    scale: 1,
    opacity: 1,
  },
  {
    scale: 10,
    opacity: 0,

    scrollTrigger: {
      trigger: "#all",
      // pin: "#test-2",
      start: "top 0%",
      end: "bottom 70%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".extras",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    scrollTrigger: {
      trigger: "#all",
      // pin: "#test-2",
      start: "top 0%",
      end: "bottom 95%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".title",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    scrollTrigger: {
      trigger: "#all",
      // pin: "#test-2",
      start: "top 0%",
      end: "bottom 95%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".pres",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    scrollTrigger: {
      trigger: "#all",
      // pin: "#test-2",
      start: "top 0%",
      end: "bottom 95%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".nebula",
  {
    scale: 1,
  },
  {
    scale: 0,

    scrollTrigger: {
      trigger: ".at-1",
      // pin: "#test-2",
      start: "top 0%",
      end: "bottom 0%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".container",
  {
    opacity: 0,
  },
  {
    opacity: 1,

    scrollTrigger: {
      trigger: ".container",
      // pin: ".container",
      start: "top 100%",
      end: "bottom 0%",
      // markers: true,
      scrub: 1,
    },
  }
);

// gsap.fromTo(
//   ".earth",
//   {
//     scale: 0,
//     x: -1000,
//     y: -1000,
//   },
//   {
//     scale: 1,
//     x: 0,
//     y: 0,

//     scrollTrigger: {
//       trigger: ".column2",
//       // pin: ".container",
//       start: "top 100%",
//       end: "bottom 0%",
//       markers: true,
//       scrub: 1,
//     },
//   }
// );

gsap.fromTo(
  ".earth",
  {
    opacity: 0,
    scale: 0.6,
    x: -200,
    y: -200,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,

    scrollTrigger: {
      trigger: ".container",
      // pin: ".container",
      start: "top 80%",
      end: "bottom 100%",
      // markers: true,
      scrub: 1,
    },
  }
);

document.getElementById("embedButton").addEventListener("click", function () {
  console.log("clicked");
  document.querySelector(".column1").style.display = "block";
});
