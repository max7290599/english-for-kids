import { BaseComponent } from '../base-component';

import './rating.css';

export class Rating extends BaseComponent {
  constructor() {
    super('div', ['rating', 'none']);
  }

  enableRaiting = (): void => {
    this.element.classList.remove('none');
  };

  static setStarError = (): void => {
    const starError = document.createElement('div');
    starError.className = 'star-error';
    document.querySelector('.rating')?.append(starError);
  };

  static setStarWin = (): void => {
    const starSucces = document.createElement('div');
    starSucces.className = 'star-succes';
    document.querySelector('.rating')?.append(starSucces);
  };

  static resultGame = (result: string, error = 0): void => {
    const rating = (document.querySelector('.rating') as HTMLElement);
    rating.innerHTML = error === 0 ? result : `${error} ${result}`;
    rating.classList.add(result, 'center-content');
  };
}
