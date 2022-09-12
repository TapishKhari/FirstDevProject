const button = document.getElementById('menuicon');
const website = document.querySelector('.website');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
  website.classList.toggle('active');
});

close.addEventListener('click', () => {
  website.classList.remove('active');
});