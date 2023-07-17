'use strict'

// const page = document.documentElement;
// const switcher = document.querySelector('.theme-swither');

// switcher.addEventListener('click', () => {
//   if (page.classList.contains('page--theme--dark')) {
//     page.classList.remove('page--theme--dark');
//   } else {
//     page.classList.add('page--theme--dark');
//   }
// });

// const page = document.documentElement; -page(можно любое название) = (html) , (document.documentElement;)- cвязывает джс с хтмл (ищит хтмл),ну у хтмл есть клас так можено юзать querySelector('page')

// const switcher = document.querySelector('.theme-swither'); -document.querySelector - ищет селекторы которые мы укажем для взаимодействия в джс и имя константы будет его значением тоесть (swither = .theme-swither),Также есть qurySelectorAll колторый ищет все селекторы в хтмл.

// switcher.addEventListener('click', () => { -тут буде заданий обробник події "click". 1)до обєкта swither ми додамо обробник 'click' -за допомогою метода (addEventListener)- він приймає 2-параметри 1)рядок назва події ('click') назва події,2)це функція,зазвичай використовють стрілкові,що й преведено у прикладі.

    // Далі буде прописано те що потрібно буде виконати при натисканні на світчер)

//   if(page.classList.contains('page--theme--dark')) { -перевірка чи активний світчер робиться це завдяки (page.clasList(.containse) -тут перевіряється чи має page знаяення ('page--theme--dark')

//     page.classList.remove('page--theme--dark'); -якщо так то завдяки .remove(ми видаляемо ('page--theme--dark'))
//   } else {
//     page.classList.add('page--theme--dark'); якщо ж ні то додаємо
//   }
// })

// const light = document.querySelector('.page');
// const switcher = document.querySelector('.theme-swither');
// const themeName = document.querySelector('.theme-name')

// switcher.addEventListener('click', () => {
//   if(light.classList.contains('page--theme--dark')) {
//     light.classList.remove('page--theme--dark');
//     switcher.classList.remove('page--theme--dark--left');
//     themeName.textContent = 'Theme: Light'
//   } else {
//     light.classList.add('page--theme--dark');
//     switcher.classList.add('page--theme--dark--left');
//     themeName.innerHTML = 'Theme:<strong> Dark</strong>'
//   }
// })

// themeName.innerHTML = 'Theme:<strong>dark</strong>' - inerHtml дозволяє зробити довільний html слово дарк буде жирным
// themeName.textContent = 'Theme: light' - textContent дозіволяє додати текст





// const page = document.querySelector('.page');
// const switcher = document.querySelector('.theme-swither');
// const themeName = document.querySelector('.theme-name');

// page.addEventListener('click', () => {
// if(page.classList.contains('page--theme--dark')) {
//   page.classList.remove('page--theme--dark');
//   switcher.classList.remove('page--theme--dark--left'); 
//   } else {
//     page.classList.add('page--theme--dark');
//     switcher.classList.add('page--theme--dark--left'); 
//   }
// })


// const page = document.querySelector('.page');
// const swither = document.querySelector('.theme-swither');
// const themeName = document.querySelector('.theme-name');
// const themeNumber = document.querySelector('.theme-number');

// swither.addEventListener('click', () => {
//   if(page.classList.contains('page--theme--dark')) {
//     page.classList.remove('page--theme--dark');
//     swither.classList.remove('page--theme--dark--left');
//     themeName.textContent = 'Theme: light';
//     themeNumber.textContent = '185873';
//   } else {
//     page.classList.add('page--theme--dark');
//     swither.classList.add('page--theme--dark--left');
//     themeName.textContent = 'Theme: Dark';
//     themeNumber.textContent = '190000';
//   }
// });

const page = document.querySelector('.page');
const swither = document.querySelector('.theme-swither');
const burger = document.querySelector('.theme-btn');
const burgerMenue = document.querySelector('.btn-menu');

swither.addEventListener('click', () => {
  if(page.classList.contains('page--theme--dark')) {
    page.classList.remove('page--theme--dark');
    swither.classList.remove('page--theme--dark--left');
  } else {
    page.classList.add('page--theme--dark');
    swither.classList.add('page--theme--dark--left');
  }
});

burger.addEventListener('click', () => {
  if(burger.classList.contains('active')) {
    burger.classList.remove('active');
    burgerMenue.classList.remove('btn-menu--active');
  } else {
    burger.classList.add('active');
    burgerMenue.classList.add('btn-menu--active');
  }
})
