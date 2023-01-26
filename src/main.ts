import './style.css';

const card: HTMLElement = document.querySelector('.card');
let root = document.documentElement;

card.addEventListener('mousemove', (event: Event): void => {
  card.style.transition = 'transform 0s ease-in-out';

  const position = event as MouseEvent;
  let angleX;
  let angleY;
  let positionX = position.offsetX / card.clientWidth * 100;
  let positionY = position.offsetY / card.clientHeight * 100;

  root.style.setProperty('--positionX', `${positionX}%`);
  root.style.setProperty('--positionY', `${positionY}%`);

  let posX;
  let posY;

  if (position.offsetY > card.clientHeight / 2) {
    angleX = 10 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2) * 10;
    posY = 1 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2);
  } else {
    angleX = -10 - (1 - (card.clientHeight) / (card.clientHeight - position.offsetY)) * 10;
    posY = 1 + (1 - (card.clientHeight) / (card.clientHeight - position.offsetY));
  }

  if (position.offsetX > card.clientWidth / 2) {
    angleY = -10 + (card.clientWidth - position.offsetX) / (card.clientWidth / 2) * 10;
    posX = 1 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2);
  } else {
    angleY = Math.abs(10 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2) * 10);
    posX = Math.abs(1 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2));
  }

  root.style.setProperty('--hyp', `${posX > posY ? posX : posY}`);

  card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

card.addEventListener('mouseout', (): void => {
  card.style.transition = 'transform .2s ease-in-out';
  card.style.transform = 'rotateX(0) rotateY(0)';
});
