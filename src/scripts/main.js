'use strict';

const check = document.querySelector('#toggle');
const menuItem = document.querySelector('.page__body');

check.onchange = function() {
  if (check.checked) {
    menuItem.classList.add('page__body--with-menu');
  } else {
    menuItem.classList.remove('page__body--with-menu');
  };
};

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
