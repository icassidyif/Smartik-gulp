// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector('body').classList.add('webp');
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
  ibg(); // запуск перевірки IBG. Функція визначить і при можливості замінить формат даного класу з JPEG в WEBP.
});
//--------------------------------------------------------------------------------

// img like a BG by Cassidy
function ibg() {
  let ibgs = document.querySelectorAll('.ibg');
  let body = document.querySelector('body');
  let isWebP = body.classList.contains('webp');
  ibgs.forEach((item) => {
    if(item.querySelector('img')){
      item.style.backgroundImage = (isWebP)? 'url('+item.querySelector('source').getAttribute('srcset')+')' : 'url('+item.querySelector('img').getAttribute('src')+')'
    }
  })
}
//end img like BG

// round buttons by Cassidy
function roundButtons(buttons) {
  buttons.forEach(button => {
    let btnBefore = document.createElement('div');
    let btnAfter = document.createElement('div');
    btnBefore.classList.add('btn__before');
    btnAfter.classList.add('btn__after');
    button.appendChild(btnBefore);
    button.appendChild(btnAfter);
    let btnHeight = button.clientHeight;
    btnBefore.style.width = `${btnHeight}px`;
    btnAfter.style.width = `${btnHeight}px`;
    btnBefore.style.left = `-${btnHeight/2}px`;
    btnAfter.style.right = `-${btnHeight/2}px`;
    let color = getComputedStyle(button).backgroundColor;
    btnBefore.style.backgroundColor = color;
    btnAfter.style.backgroundColor = color;
    let padButton = getComputedStyle(button).padding.match(/\d+/g).map(Number);
    button.style.padding = `${padButton[0]}px ${padButton[1]-(btnHeight/2)}px`;
  })
}
//end

 //


// end