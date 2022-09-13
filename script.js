const button = document.getElementById('menuicon');
const website = document.querySelector('.website');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
  website.classList.toggle('active');
});

close.addEventListener('click', () => {
  website.classList.remove('active');
});

const formdata = {
  yourname: '',
  youremail: '',
  yourmessage: '',
};

const field1 = document.getElementById('name');
const field2 = document.getElementById('mail');
const field3 = document.getElementById('msg');

field1.addEventListener('change', () => {
  formdata.yourname = field1.value;
  window.localStorage.setItem('formdata', JSON.stringify(formdata));
});

field2.addEventListener('change', () => {
  formdata.youremail = field2.value;
  window.localStorage.setItem('formdata', JSON.stringify(formdata));
});

field3.addEventListener('change', () => {
  formdata.yourmessage = field3.value;
  window.localStorage.setItem('formdata', JSON.stringify(formdata));
});

if (window.localStorage.getItem('formdata') !== null) {
  const formdata = JSON.parse(window.localStorage.getItem('formdata'));
  field1.value = formdata.yourname;
  field2.value = formdata.youremail;
  field3.value = formdata.yourmessage;
}

const mail = document.getElementById('mails');

mails.addEventListener('click', () => {
  const email = field2.value;
  const small = document.getElementById('small');
  if (email.toLowerCase() !== email) {
    small.innerText = 'Enter your email in lower case letters';
    document.forms[0].addEventListener('submit', (event) => {
      event.preventDefault();
    });
  } else {
    document.forms[0].submit();
  }
});