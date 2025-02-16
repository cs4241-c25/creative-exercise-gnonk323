document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('change-color');
  const face = document.getElementById('face');

  button.addEventListener('click', () => {
    if (face.style.fill === 'yellow') {
      face.style.fill = 'red';
    } else {
      face.style.fill = 'yellow';
    }
  });
});