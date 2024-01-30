gsap.fromTo(
  "#test-2",
  {
    opacity: 0, // start from completely transparent
  },
  {
    opacity: 1, // animate to completely visible

    scrollTrigger: {
      trigger: "#test-2",
      pin: "#test-2",
      start: "top 0%",
      end: "bottom 0%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".ceeeentre",
  {
    opacity: 0, // start from completely transparent
  },
  {
    opacity: 1, // animate to completely visible

    scrollTrigger: {
      trigger: "#test-2",
      pin: ".ceeeentre",
      start: "top 0%",
      end: "bottom 0%",
      // markers: true,
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".sun",
  {
    scale: 1,
  },
  {
    scale: 0,

    scrollTrigger: {
      trigger: ".sun",
      pin: ".sun",
      start: "top 0%",
      end: "bottom 0%",
      markers: true,
      scrub: 1,
    },
  }
);

// gsap.fromTo(
//   ".sun",
//   {
//     opacity: 0, // start from completely transparent
//   },
//   {
//     opacity: 1, // animate to completely visible

//     scrollTrigger: {
//       trigger: "#test-2",
//       pin: ".sun",
//       start: "top 0%",
//       end: "bottom 0%",
//       // markers: true,
//       scrub: 1,
//     },
//   }
// );

// gsap.fromTo(
//   ".sun",
//   {
//     scale: 1,
//     x: 0,
//     y: 0,
//   },
//   {
//     scale: 1.5,
//     x: 500,
//     y: 100,

//     scrollTrigger: {
//       trigger: "#test-2",
//       pin: ".sun",
//       start: "top 25%",
//       end: "bottom 0%",
//       markers: true,
//       scrub: 1,
//     },
//   }
// );

gsap.fromTo(
  "#test-3",
  {
    opacity: 0, // start from completely transparent
  },
  {
    opacity: 1, // animate to completely visible

    scrollTrigger: {
      trigger: "#test-3",
      pin: "#test-3",
      start: "top 0%",
      end: "bottom 0%",
      // markers: true,
      scrub: 1,
    },
  }
);
