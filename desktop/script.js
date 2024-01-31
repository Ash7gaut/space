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
      markers: true,
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

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les boutons et toutes les pop-ups par leurs identifiants ou classes
  var popupBtns = document.querySelectorAll(".popup-btn");
  var popups = document.querySelectorAll(".popup-content");

  // Ajoutez des gestionnaires d'événements à chaque bouton
  popupBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Récupérez les informations associées au bouton
      var popupId = btn.getAttribute("data-popup");
      var embedId = btn.getAttribute("data-embed");

      // Affichez la pop-up correspondante
      var popup = document.getElementById(popupId);
      popup.style.display = "block";

      // Cacher l'embed associé
      var embed = document.getElementById(embedId);
      embed.style.display = "none";
    });
  });
});
