$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 5,
  	slidesToScroll: 1,
  	nextArrow: '<div class="arrow arrow-right"></div>',
  	prevArrow: '<div class="arrow arrow-left"></div>',
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

$(document).ready(function(){
  $('.portfolio-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="portfolio__arrow portfolio__arrow-right"></div>',
    prevArrow: '<div class="portfolio__arrow portfolio__arrow-left"></div>',
  });
});

$(document).ready(function(){
$('form').submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $("form").trigger("reset");
        $('#modal').removeClass('modal_visible');
        $('#modal-thank').toggleClass('thank_visible');
      });
      return false;
    });

  new WOW().init();
});

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(51585368, "init", {
        id:51585368,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });

   document.querySelector('#button-request-1').addEventListener('click', function(){
    yaCounter51585368.reachGoal('btn-reques'); return true;
  });
  document.querySelector('#button-order').addEventListener('click', function(){
    yaCounter51585368.reachGoal('btn-order'); return true;
  });

  $(document).ready(function() {
  $('.modal-visible').on('click', function() {
    $('#modal').toggleClass('modal_visible');
  });
  $('.modal__close').on('click', function() {
    $('#modal').toggleClass('modal_visible');
  });
  $('.modal-thank__close').on('click', function() {
    $('#modal-thank').toggleClass('thank_visible');
  });
  $('.close-menu').on('click', function(){
  $('#menu-mobil__check').prop('checked',false);
  });
});

