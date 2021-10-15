import { CardModel } from '../../models/card-model';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

import './card-container.css';

export class CardContainer extends BaseComponent {
  private card: Card;

  constructor(card: CardModel) {
    super('div', ['card-container']);
    this.card = new Card(card);
    this.element.appendChild(this.card.element);
  }

  render(): HTMLElement {
    return this.element;
  }
}
