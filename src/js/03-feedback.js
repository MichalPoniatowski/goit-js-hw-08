import throttle from 'lodash.throttle';

const btnEl = document.querySelector('button[type="submit"]');
const emailEl = document.querySelector('input[type="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

let data = {
  email: '',
  message: '',
};

const checkLocalStorage = () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    emailEl.value = savedData.email;
    messageEl.value = savedData.message;
  } else {
    emailEl.value = '';
    messageEl.value = '';
  }
};

checkLocalStorage();

function emailLocalStorage(event) {
  data.email = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function messageLocalSorage(event) {
  data.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function resetLocalSorage(event) {
  event.preventDefault();
  localStorage.clear();
  checkLocalStorage();
}

emailEl.addEventListener('input', throttle(emailLocalStorage, 1000));
messageEl.addEventListener('input', throttle(messageLocalSorage, 1000));
btnEl.addEventListener('click', resetLocalSorage);
