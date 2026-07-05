// SWIPER SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});

// SCROLL TOP
$(document).ready(function(){
    "use strict";
    var offSetTop = 300;
    var $scrollToTopButton = $('.scroll-top-btn');
    
    $scrollToTopButton.hide();
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });
    
    $scrollToTopButton.click(function(){
        $('html, body').animate({scrollTop: 0}, 200);
        return false;
    });
});

// MOUSE CURSOR
const $cursor = $("#cursor");
const $cursorBorder = $("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

$(document).on("mousemove", function(e) {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  $cursor.css("transform", `translate(${e.clientX}px, ${e.clientY}px)`);
});

function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  $cursorBorder.css("transform", `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

// COUNTER 
$(document).ready(function () {
  var counted = false;

  $(window).scroll(function () {
    var counter = $('.counter');
    if (counter.length === 0) return; // Ensure .counter exists

    var oTop = counter.offset().top - window.innerHeight;

    if (!counted && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this);
        var countTo = parseInt($this.attr('data-count'), 10);

        $({ countNum: 0 }).animate(
          { countNum: countTo },
          {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      counted = true;
    }
  });
});
