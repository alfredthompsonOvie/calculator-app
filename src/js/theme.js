// 'use strict'
function selectTheme() { 
  const themesBtnContainer = document.querySelector('#themes__btn__container');
  const themesBtns = document.querySelectorAll('.themeBtn');
  const app = document.querySelector('#app');

  themesBtnContainer.addEventListener('click', (e) => {
    // console.log("clicked");
    const target = e.target.closest('.themeBtn')
    if (!target) return;
    // console.log(target);
    // !REMOVE ACTIVE STYLE FROM ALL btns
    themesBtns.forEach(btn => {
      btn.classList.remove('is__active');
    })
    // !ADD ACTIVE STYLE TO SELECTED btn
    target.classList.add('is__active');
    // console.log(target.dataset.theme);
    const selectedBtn = target.dataset.theme;
    if (selectedBtn === 'one') {
      app.className = 'theme__one';
    }
    if (selectedBtn === 'two') {
      app.className = 'theme__two';
      
    }
    if (selectedBtn === 'three') {
      app.className = 'theme__three';
      
    }
  })
}

export { selectTheme };