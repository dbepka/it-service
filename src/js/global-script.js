// Свой код с jQuery

$( document ).ready(function() {

  $('#reviews__gallery').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 55,
    nav: true,
    // autoHeight: true,
    responsive: {
      768: {
        items: 2,
        // autoHeight: false,
      }
    }
  });

  $('#services__gallery').owlCarousel({
    items: 1,
    loop: true,
    margin: 26,
    nav: true,
    autoHeight: true,
    responsive: {
      480: {
        items: 2,
        autoHeight: false,
      },
      768: {
        items: 3,
        autoHeight: false,
      },
      992: {
        items: 4,
        autoHeight: false,
      },
    }
  });

});
