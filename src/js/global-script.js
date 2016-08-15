// Свой код с jQuery

$( document ).ready(function() {

  $('#reviews__gallery').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 55,
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
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

  // Якорные ссылки страниц (правка из-за хедера)
  $('a[href^="#"]:not([data-toggle])').on('click', function(e){
    if( $(this).attr('href').length > 1) {
      e.preventDefault();
      var targetPosition = $(this.hash).offset().top;
      var headerHeight = $('.page-nav').outerHeight();
      $('body,html').animate({'scrollTop':targetPosition - headerHeight},250);
    }
  });

  // Промотка вверх (взято из шаблона)
  $(window).scroll(function() {
    if($(this).scrollTop() > 500) {
      $('#toTop').show();
    } else {
      $('#toTop').hide();
    }
  });
  $('#toTop').on("click",function() {
    $('body,html').animate({scrollTop:0},500);
  });

});
