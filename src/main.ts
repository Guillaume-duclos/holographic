import './style.css';

const card: HTMLElement = document.querySelector('.card');

console.log(card.clientWidth);

card.addEventListener('mousemove', (event: Event): void => {
  const position = event as MouseEvent;
  let angleX;
  let angleY;

  if (position.offsetY > card.clientHeight / 2) {
    angleX = 1 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2);
    console.log(1 - (card.clientHeight - position.offsetY) / (card.clientHeight / 2));
  } else {
    angleX = (card.clientHeight / 2) / (card.clientHeight - position.offsetY);
    console.log((card.clientHeight / 2) / (card.clientHeight - position.offsetY));
  }

  if (position.offsetX > card.clientWidth / 2) {
    angleY = 1 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2);
    //console.log(1 - (card.clientWidth - position.offsetX) / (card.clientWidth / 2));
  } else {
    angleY = (card.clientWidth / 2) / (card.clientWidth - position.offsetX);
    //console.log((card.clientWidth / 2) / (card.clientWidth - position.offsetX));
  }

  console.log('--------------------------------');

  card.style.transform = `rotate3d(${angleX}, ${angleY}, 0, 45deg)`;
});
