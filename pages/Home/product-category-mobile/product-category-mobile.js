// product catogary mobile js
$(document).ready(function () {
    $(".product-catogery-mobile").owlCarousel({
        loop: false,
        margin: 1,
        stagePadding: 0,
        nav: false,
        dots:false,
        responsive: {
            320: {
                 items: 4.5,
            },
            375: {
                 items: 4.5,
            },
            480: {
                 items: 4.5,
            },
            768: {
                 items: 5.5,
            },
            992: {
                 items: 6.5,
            },
       }
    })
});