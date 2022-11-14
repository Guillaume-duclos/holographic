import './style.css';

const card: HTMLElement = document.querySelector('.card');

card.addEventListener('mousemove', (event: Event): void => {
  card.style.transition = 'transform 0s ease-in-out';

  const position = event as MouseEvent;
  let angleX;
  let angleY;

  if (position.offsetY > card.clientHeight / 2) {
    angleX = 10 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2) * 10;
  } else {
    angleX = -10 - (1 - (card.clientHeight) / (card.clientHeight - position.offsetY)) * 10;
  }

  if (position.offsetX > card.clientWidth / 2) {
    angleY = -10 + (card.clientWidth - position.offsetX) / (card.clientWidth / 2) * 10;
  } else {
    angleY = Math.abs(10 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2) * 10);
  }

  card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

card.addEventListener('mouseout', (): void => {
  card.style.transition = 'transform .2s ease-in-out';
  card.style.transform = 'rotateX(0) rotateY(0)';
});
