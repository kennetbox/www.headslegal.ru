$(document).ready(function() {

  // MOBILE MENU BUTTON
  $('#menu').click(function() {
    if ( $('menu').hasClass('menu-open') ) {
      $('menu').removeClass('menu-open');
      $('menu').slideUp(300);
    } else {
      $('menu').addClass('menu-open');
      $('menu').slideDown(300);
    }
  });

  // MENU PANEL SHOW/HIDE
  $(window).resize(function() {
    var winWidth = window.innerWidth;
    if (winWidth > 991) {
      $('menu').css('display', 'block');
    } else {
      $('menu').css('display', 'none');
    }
  });

  $(".dropdown").click(function(){
    $(this).toggleClass("open");
  })

  // MAIN SLIDER
  $('.main-slider').slick({
    appendArrows: $('.main-slider-arrows'),
    prevArrow: '<button type="button" class="slide-prev"></button>',
    nextArrow: '<button type="button" class="slide-next"></button>',
    dots: true,
    appendDots: $('.main-slider-dots')
  });

  // CLIENT SLIDER
  $('.client-slider').slick({
    appendArrows: $('.client-slider-arrows'),
    prevArrow: '<button type="button" class="slide-prev"></button>',
    nextArrow: '<button type="button" class="slide-next"></button>',
    dots: true,
    appendDots: $('.client-slider-dots'),
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  // CALLBACK MODAL
  // $('.order-call').click(function(e) {
  //   e.preventDefault();
  //   $('.callback-modal').velocity(
  //     { scale: [1, 1.1], opacity: 1}, { display: "flex", duration: 300 }
  //   );
  // });
  //
  // // CLOSE CALLBACK
  // $('.close-modal').click(function() {
  //   $('.callback-modal').velocity(
  //     { scale: [1.1], opacity: 0}, { display: "none", duration: 300 }
  //   );
  // });

  // WRITEBACK MODAL
  $('.order-call').click(function(e) {
    e.preventDefault();
    $('.writeback-modal').velocity(
      { scale: [1, 1.1], opacity: 1}, { display: "flex", duration: 300 }
    );
  });

  // ENTRANCE MODAL
  $('.entrance').click(function(e) {
    e.preventDefault();
    $('.entrance-modal').velocity(
      { scale: [1, 1.1], opacity: 1}, { display: "flex", duration: 300 }
    );
  });

  // CLOSE MODALS BUTTON

  function closeModal() {
    $('.modal').velocity(
      { scale: [1.1], opacity: 0}, { display: "none", duration: 300 }
    );
  }
  $('.close-modal').click(function() {
    closeModal();
  });

  // CLOSE MODALS ON ESC
  $(document).on('keydown', function (e) {
    if (e.which === 27) {
      e.preventDefault();
      closeModal();
    }
  });

  // CLOSE MODAL ON OUTSIDE CLICK
  $('.modal-wrap').click(function(e) {
    e.stopPropagation();
  });
  $('.entrance-image').click(function(e) {
    e.stopPropagation();
  });
  $('.modal').click(function(){
    closeModal();
  });

});
