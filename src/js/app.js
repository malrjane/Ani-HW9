document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');
  const textContent = document.querySelector('.text-content');

  button.addEventListener('click', () => {
    textContent.classList.toggle('collapsed');
  })
})