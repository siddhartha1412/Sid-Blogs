// Dark mode toggle functionality
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Switch to Dark Mode';
toggleButton.id = 'dark-mode-toggle';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');
  // Change the button text based on mode
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
