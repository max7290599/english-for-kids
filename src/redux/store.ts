import { createStore } from 'redux';
import { rootReducers } from './rootReducer';

export const store = createStore(rootReducers);

const addClass = (items: NodeListOf<Element>, className: string): void => {
  items.forEach((item) => item.classList.add(className));
};

const removeClass = (items: NodeListOf<Element>, className: string): void => {
  items.forEach((item) => item.classList.remove(className));
};

store.subscribe(() => {
  setTimeout(() => {
    const mainCards = document.querySelectorAll('.main-card');
    const menu = document.querySelector('.menu');
    const isTrain = store.getState().theme.isTray;
    const rotates = document.querySelectorAll('.rotate');
    const cardHeader = document.querySelectorAll('.card-header');
    const cards = document.querySelectorAll('.card');
    const btnStartGame = document.querySelector('.btn');
    if (isTrain) {
      removeClass(rotates, 'none');
      btnStartGame?.classList.add('none');
      removeClass(cards, 'card-cover');
      addClass(mainCards, 'green');
      removeClass(cardHeader, 'none');
      menu?.classList.add('green');
    } else {
      addClass(rotates, 'none');
      addClass(cards, 'card-cover');
      addClass(cardHeader, 'none');
      removeClass(mainCards, 'green');
      menu?.classList.remove('green');
      btnStartGame?.classList.remove('none');
    }
  }, 1);
});
