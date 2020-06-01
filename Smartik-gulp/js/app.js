"use strict";

// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }

  ibg(); // запуск перевірки IBG. Функція визначить і при можливості замінить формат даного класу з JPEG в WEBP.
}); //--------------------------------------------------------------------------------
// img like a BG by Cassidy

function ibg() {
  var ibgs = document.querySelectorAll('.ibg');
  var body = document.querySelector('body');
  var isWebP = body.classList.contains('webp');
  ibgs.forEach(function (item) {
    if (item.querySelector('img')) {
      item.style.backgroundImage = isWebP ? 'url(' + item.querySelector('source').getAttribute('srcset') + ')' : 'url(' + item.querySelector('img').getAttribute('src') + ')';
    }
  });
} //end img like BG
// round buttons by Cassidy


function roundButtons(buttons) {
  buttons.forEach(function (button) {
    var btnBefore = document.createElement('div');
    var btnAfter = document.createElement('div');
    btnBefore.classList.add('btn__before');
    btnAfter.classList.add('btn__after');
    button.appendChild(btnBefore);
    button.appendChild(btnAfter);
    var btnHeight = button.clientHeight;
    btnBefore.style.width = "".concat(btnHeight, "px");
    btnAfter.style.width = "".concat(btnHeight, "px");
    btnBefore.style.left = "-".concat(btnHeight / 2, "px");
    btnAfter.style.right = "-".concat(btnHeight / 2, "px");
    var color = getComputedStyle(button).backgroundColor;
    btnBefore.style.backgroundColor = color;
    btnAfter.style.backgroundColor = color;
    var padButton = getComputedStyle(button).padding.match(/\d+/g).map(Number);
    button.style.padding = "".concat(padButton[0], "px ").concat(padButton[1] - btnHeight / 2, "px");
  });
} //end
//Menu BURGER


var burgerMenu = document.querySelector('.burger-menu');
var body = document.querySelector('body');
var menu = document.querySelector('.menu');

if (burgerMenu != null) {
  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  });
} // end menu
//Check scroll position=by Cassidy=======================================================
//=========================================================================//init SmoothScroll========================================================


var scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]',
  speed: 300,
  topOnEmptyHash: true,
  clip: true,
  easing: 'easeInOutCubic',
  updateURL: true,
  popstate: true
}); //=========================================================================
//=========================================================================//listeners========================================================

document.addEventListener('scrollStart', function (e) {
  burgerMenu.classList.remove('active');
  menu.classList.remove('active');
  body.classList.remove('lock');
}, false); //=========================================================================
////=include ./particles/swipper.js

$(document).ready(function () {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Завантаження фото #%curr%...',
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    },
    removalDelay: 300
  });
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });
});
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease',
    infinite: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  });
  $('.slider-garden').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2500,
    mobileFirst: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: true
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        adaptiveHeight: false
      }
    }]
  });
}); //Spoiler=========================================================================

$('.spoiler').click(function () {
  $(this).toggleClass('opened').toggleClass('closed').prev().slideToggle(700);

  if ($(this).hasClass('opened')) {
    $(this).find('label').html('Згорнути текст');
  } else {
    $(this).find('label').html('Читати далі');
  }
}); //Round buttons====================================================================
// let buttons = document.querySelectorAll('.btn');
// roundButtons(buttons);
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================