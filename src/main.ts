import './style.css';

const card: HTMLElement = document.querySelector('.card');

card.addEventListener('mousemove', (event: Event): void => {
  card.style.transition = 'transform 0s ease-in-out';

  const position = event as MouseEvent;
  let angleX;
  let angleY;

  if (position.offsetY > card.clientHeight / 2) {
    angleX = 1 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2);
    console.log(1 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2));
  } else {
    angleX = -1 - (1 - (card.clientHeight) / (card.clientHeight - position.offsetY));
    //console.log(-1 - (1 - (card.clientHeight) / (card.clientHeight - position.offsetY)));
  }

  if (position.offsetX > card.clientWidth / 2) {
    angleY = 1 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2);
    //console.log(1 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2));
  } else {
    angleY = -1 - (1 - (card.clientWidth) / (card.clientWidth - position.offsetX));
    //console.log(-1 - (1 - (card.clientWidth) / (card.clientWidth - position.offsetX)));
  }

  card.style.transform = `rotate3d(${angleX}, ${angleY}, 0, 20deg)`;
});

card.addEventListener('mouseout', (): void => {
  card.style.transition = 'transform .2s ease-in-out';
  card.style.transform = `rotate3d(0, 0, 0, 20deg)`;
});
