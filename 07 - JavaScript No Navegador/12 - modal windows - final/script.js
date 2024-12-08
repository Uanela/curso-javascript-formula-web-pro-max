'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.open-modal');

function openModal() {
  //   modal.style.display = 'block';
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  //   modal.style.display = 'none';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener('click', openModal);
}

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log(e);
  //   console.log('Tecla clicada');

  if (e.key === 'Escape') closeModal();
});
