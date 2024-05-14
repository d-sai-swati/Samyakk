$(".trending-look-carousel").owlCarousel({
  items: 1,
  merge: true,
  margin: 20,
  video: true,
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
