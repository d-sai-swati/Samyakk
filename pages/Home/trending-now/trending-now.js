// trending now js
$(document).ready(function () {
  $(".trending-now-carousel").owlCarousel({
    video: true,
    margin: 30,
    stagePadding: 0,
    nav: true,
    dots: false,
    navText: [
      '<img src="../../../assets/samyakk-icons/arrow-left-circle.svg" alt="Previous">',
      '<img src="../../../assets/samyakk-icons/arrow-right-circle.svg" alt="Next">',
    ],
    responsive: {
      320: {
        items: 2,
        margin: 8,
        nav:false,
      },
      375: {
        items: 2,
        margin: 8,
        nav:false,
      },
      480: {
        items: 2,
        margin: 8,
        nav:false,
      },
      768: {
        items: 3,
        margin: 10,
      },
      992: {
        items: 3,
        margin: 14,
      },
      1024: {
        items: 3,
        margin: 18,
      },
      1200: {
        items: 4,
        margin: 20,
      },
      1440: {
        items: 5,
        margin: 20,
      },
    },
  });
});
// trending now js
