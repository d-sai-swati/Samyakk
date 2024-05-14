
// product catogary js


$(document).ready(function () {
     $(".owl-carousal-plain").owlCarousel({
          margin: 10,
          stagePadding: 0,
          dots:false,
          nav: false,
          responsive: {
               320: {
                    items: 2.5,
               },
               375: {
                    items: 2.5,
                    margin: 40
               },
               480: {
                    items: 2.5,
                    margin: 40
               },
               768: {
                    items: 3,
                    margin: 40
               },
               992: {
                    items: 3,
                    margin: 40
               },
               1024: {
                    items: 4,
                    margin: 40
               },
               1200: {
                    items: 4,
                    margin: 50
               },
               1440: {
                    items: 5,
                    margin: 50
               },
          }
     })
});
// product catogary js