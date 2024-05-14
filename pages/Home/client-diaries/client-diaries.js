// product catogary js

$(document).ready(function () {
  $(".client-diaries-carousel").owlCarousel({
    margin: 30,
    stagePadding: 0,
    nav: true,
    dots: true,
    navText: [
      '<img src="../../../assets/samyakk-icons/arrow-left-circle.svg" alt="Previous">',
      '<img src="../../../assets/samyakk-icons/arrow-right-circle.svg" alt="Next">',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 8,
      },
      600: {
        items: 2,
        nav: false,
        margin: 15,
      },
      1000: {
        items: 2,
        margin: 30,
      },
    },
  });
});

// $(".accordion-button").click(function () {
//      $(this).text(function (i, text) {
//           return text === "+" ? "-" : "+";
//      });
// });

// product catogary js
