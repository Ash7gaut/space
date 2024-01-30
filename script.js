// gsap.to("#test-2", {
//   scale: 0,
//   scrollTrigger: {
//     trigger: "#test",
//     markers: true,
//     start: "top 10%",
//     end: "bottom 20%",
//   },
//   scrub: 1,
// });

// gsap.fromTo(
//   "#test-2",
//   {
//     y: 100,
//     opacity: 0,
//     scale: 0,
//   },
//   {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     scrollTrigger: {
//       trigger: "#test",
//       start: "top 0%",
//       end: "bottom 0%",
//       // markers: true,
//       scrub: 1,
//     },
//   }
// );

// gsap.fromTo(
//   "#test-2",
//   {
//     opacity: 1,
//     scale: 1,
//     x: 0,
//   },
//   {
//     opacity: 0,
//     scale: 1.5,
//     x: 1000,

//     scrollTrigger: {
//       trigger: "#test-2",
//       start: "top 0%",
//       end: "bottom 0%",
//       markers: true,
//       scrub: 1,
//     },
//   }
// );
// Set #test-2 to be invisible initially
gsap.set("#test-2", { visibility: "hidden", opacity: 0 });

gsap.fromTo(
  "#test-2",
  {
    visibility: "visible", // make this element invisible when scrolling starts
    opacity: 0, // start from completely transparent
  },
  {
    visibility: "visible", // make this element visible when scrolling starts
    opacity: 1, // animate to completely visible

    scrollTrigger: {
      trigger: "#test-2",
      pin: "#test-2",
      start: "top 0%",
      end: "bottom 0%",
      markers: true,
      scrub: 1,
      onStart: function() {
        gsap.to("#test-2", { visibility: "visible", opacity: 1 }); // make #test-2 visible when scrolling starts
      },
      onEnd: function() {
        gsap.to("#test-2", { visibility: "hidden", opacity: 0 }); // make #test-2 invisible when scrolling ends
      }
    },
  }
);

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
      markers: true,
      scrub: 1,
    },
  }
);
