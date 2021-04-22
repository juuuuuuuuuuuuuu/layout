const menuBar = document.querySelector('.menu_bar');
const menuList = document.querySelector('.menu');
const share = document.querySelector('.share');

menuBar.addEventListener('click', () => {
  menuList.classList.toggle('active');
  share.classList.toggle('active');
});