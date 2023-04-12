// $(".nav .nav-link").on("click", function(){
//     $(".nav").find(".active").removeClass("active");
//     $(this).addClass("active");
// });

// $(document).ready(function () {
//     $("ul.navbar-nav > li").click(function (e) {
//      $("ul.navbar-nav > li").removeClass("active");
//      $(this).addClass("active");
//       });
//   });
$("#nav-projects a").on("click", function (e) {
  e.preventDefault();
  $(this).tab("show");
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$("#btn-demo").on("shown.bs.modal", function () {
  $("#exampleModal").trigger("focus");
});

// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.style.backgroundColor = "#4361ee";
//   } else {
//     navbar.style.backgroundColor = "transparent";
//   }
// });

const getFlagEmoji = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));

const flagReplace = document.querySelectorAll("[data-flag]");
flagReplace.forEach((s) => (s.innerHTML = getFlagEmoji(s.dataset.flag)));
