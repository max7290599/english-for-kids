import { CardModel } from '../../models/card-model';
import { BaseComponent } from '../base-component';

import './card.css';

export class Card extends BaseComponent {
  constructor(card: CardModel) {
    super('div', ['card']);
    this.element.innerHTML = `
    <div class="front" id='${card.word}' style="background-image: url('./${card.image}')">
      <div class="card-header">${card.word}</div>
    </div>
    <div class="back" style="background-image: url('./${card.image}')">
      <div class="card-header">${card.translation}</div>
    </div>
    <div class="rotate"></div>
  `;
  }
}
