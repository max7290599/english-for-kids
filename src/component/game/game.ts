import { CardModel } from '../../models/card-model';
import { getCategory } from '../../redux/actions';
import { store } from '../../redux/store';
import { Rating } from '../rating/rating';
import { getRandomNumber } from '../shared/get-random-number';

export class Game {
  private cardField: Element | null;
  private activeWord = '';
  private audio: HTMLAudioElement;
  private audioEffect: HTMLAudioElement;
  private errorClick: number;

  constructor() {
    this.errorClick = 0;
    this.audio = new Audio();
    this.audioEffect = new Audio();
    this.cardField = document.querySelector('.container');
    this.cardField?.addEventListener('click', (event: Event) => this.cardHandler(event));
  }

  repeatGame = (): void => {
    this.audio.play();
  };

  playGame = (cardModel: CardModel[]): void => {
    const randomNumber = getRandomNumber(0, cardModel.length - 1);
    this.audio.src = `./${cardModel[randomNumber].audioSrc}`;
    this.activeWord = cardModel[randomNumber].word;
    this.audio.autoplay = true;
  };

  cardHandler = (ev: Event): void => {
    const target = ev.target as HTMLElement;
    const clickCard = JSON.parse(localStorage.getItem(this.activeWord) || '');
    if (target.classList.contains('inactive')) return;

    if (target.classList.contains('front')) {
      if (target.id === this.activeWord) {
        clickCard.correct += 1;
        this.audioEffect.src = './audio/correct.mp3';
        this.audioEffect.play();
        target.classList.add('inactive');
        const field = store.getState().game.cards.filter((item) => item.word !== this.activeWord);
        store.dispatch(getCategory(field));
        setTimeout(() => this.playGame(store.getState().game.cards), 1500);
        Rating.setStarWin();
      } else {
        this.errorClick++;
        clickCard.wrong += 1;
        this.audioEffect.src = './audio/error.mp3';
        this.audioEffect.play();
        Rating.setStarError();
      }
    }

    clickCard.perCent = Math.ceil((clickCard.wrong * 100) / (clickCard.correct + clickCard.wrong));
    if (clickCard.perCent === Infinity) clickCard.perCent = 0;
    localStorage.setItem(this.activeWord, JSON.stringify(clickCard));

    if (store.getState().game.cards.length === 0) {
      document.querySelectorAll('.card').forEach((item) => item.classList.add('none'));
      if (document.querySelector('.star-error') === null) {
        this.audioEffect.src = './audio/success.mp3';
        this.audioEffect.play();
        Rating.resultGame('win');
        setTimeout(() => { window.location.href = '#mainPage'; }, 4000);
        (document.querySelector('.switch-input') as HTMLInputElement).checked = true;
      } else {
        Rating.resultGame('error', this.errorClick);
        this.audioEffect.src = './audio/failure.mp3';
        this.audioEffect.play();
        setTimeout(() => { window.location.href = '#mainPage'; }, 4000);
        this.errorClick = 0;
        (document.querySelector('.switch-input') as HTMLInputElement).checked = true;
      }
    }
  };
}
