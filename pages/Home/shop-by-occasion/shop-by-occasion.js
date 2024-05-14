// shop by occasion js
$(document).ready(function () {
  $(".shop-by-occasion").owlCarousel({
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
        nav: false,
        margin: 8,
      },
      375: {
        items: 2,
        nav: false,
        margin: 8,
      },
      480: {
        items: 2,
        nav: false,
        margin: 8,
      },
      768: {
        items: 2,
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
        items: 3,
        margin: 20,
      },
      1440: {
        items: 3.5,
        margin: 20,
      },
    },
  });
});

// shop by occasion js
