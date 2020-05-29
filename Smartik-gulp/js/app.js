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
// Spoiler by Cassidy
//end spoiler
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
// Sliders -- Generate required classes and elements for swiper slider


var sliders = document.querySelectorAll('.swiper');

if (sliders) {
  sliders.forEach(function (slider) {
    if (!slider.classList.contains('swiper-build')) {
      var sliderItems = Array.from(slider.children);

      if (sliderItems) {
        sliderItems.forEach(function (sliderItem) {
          sliderItem.classList.add('swiper-slide');
        });
      }

      var sliderContent = slider.innerHTML;
      var sliderWrapper = document.createElement('div');
      sliderWrapper.classList.add('swiper-wrapper');
      sliderWrapper.innerHTML = sliderContent;
      slider.innerHTML = '';
      slider.appendChild(sliderWrapper);
      slider.classList.add('swiper-build');
    }

    if (slider.classList.contains('gallery')) {// slider.data('LightGallery').destroy(true);
    }
  });
  slidersBuildCallback();
}

function slidersBuildCallback() {}

var mainSlider = new Swiper('.main-slider__body', {
  flipEffect: {
    rotate: 30,
    slideShadows: false
  },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: false,
  speed: 800,
  // direction: 'horizontal',
  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  navigation: {
    nextEl: '.control-main-slider__arrow_next',
    prevEl: '.control-main-slider__arrow_prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true
    }
  } // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});
var secondSlider = new Swiper('.slider-lots__body', {
  // flipEffect: {
  //   rotate: 30,
  //   slideShadows: false,
  // },
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 0,
  // autoHeight: false,
  speed: 800,
  // direction: 'horizontal',
  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  navigation: {
    nextEl: '.control-slider-lots__arrow_next',
    prevEl: '.control-slider-lots__arrow_prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    550: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  },
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

}); //===================================slider-quotes

var sliderQuotes = new Swiper('.slider-quotes__body', {
  // flipEffect: {
  //   rotate: 30,
  //   slideShadows: false,
  // },
  effect: 'fade',
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // autoHeight: false,
  speed: 1500,
  // direction: 'horizontal',
  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  navigation: {
    nextEl: '.control-slider-quotes__circle'
  },
  breakpoints: {
    320: {
      autoHeight: true
    },
    570: {
      autoHeight: false
    }
  },
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

}); //Check scroll position=by Cassidy=======================================================
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
//Spoiler=========================================================================

$('.spoiler').click(function () {
  $(this).toggleClass('opened').toggleClass('closed').prev().slideToggle(700);

  if ($(this).hasClass('opened')) {
    $(this).find('label').html('Згорнути текст');
  } else {
    $(this).find('label').html('Читати далі');
  }
}); //=========================================================================
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