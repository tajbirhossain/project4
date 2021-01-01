let burger = document.querySelector('.burger');
let navBar = document.querySelector('.navBar');
let rightNav = document.querySelector('.rightNav');
let navList = document.querySelector('.navList');
burger.addEventListener('click', ()=> {
  rightNav.classList.toggle('vClassResp');
  navList.classList.toggle('vClassResp');
  navBar.classList.toggle('heightNavResp')
})
