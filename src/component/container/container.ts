import { ContainerCardModel } from '../../models/card-model';
import { getCategory } from '../../redux/actions';
import { store } from '../../redux/store';
import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import { CardContainer } from '../card-container/card-container';
import { Game } from '../game/game';
import { Link } from '../link/link';
import { Rating } from '../rating/rating';
import { getData } from '../shared/get-data';
import { getLink } from '../shared/get-link';
import { parseStatistics } from '../shared/parse-statistics';

import './container.css';

export class Container extends BaseComponent {
  private cards: Promise<ContainerCardModel[]> | undefined;
  private btnStartGame: Button | undefined;
  private audioCard: HTMLAudioElement | undefined;
  private game: Game | undefined;
  private rating: Rating | undefined;

  constructor(pageId: string) {
    super('div', ['container', 'main-container']);
    this.cards = getData('cards');
    this.element.id = pageId;
    if (pageId === 'mainPage') {
      this.createNav();
    } else {
      this.rating = new Rating();
      this.element.append(this.rating.element);
      this.handlerClick(pageId);
      this.btnStartGame = new Button('Start Game', 'btn');
      this.btnStartGame.element.addEventListener('click', () => this.handlerStartGame());
      this.audioCard = document.createElement('audio');
      this.element.addEventListener('click', (event: Event) => this.handlerCard(event));
    }
    this.element.addEventListener('mouseout', (event: MouseEvent) => Container.mouseOutRotate(event));
  }

  addNav(link: Link[] | CardContainer[]): void {
    link.forEach((item: Link | CardContainer) => this.element.appendChild(item.element));
    if (this.btnStartGame === undefined) return;
    if (this.audioCard === undefined) return;
    this.element.append(this.btnStartGame.element, this.audioCard);
  }

  static mouseOutRotate(event: MouseEvent): void {
    event.stopPropagation();
    const cardElement = event.relatedTarget as HTMLElement;
    if (!cardElement.classList.contains('back')) {
      cardElement.classList.remove('translate');
    }
  }

  handlerCard(event: Event): void {
    const target = event.target as HTMLElement;
    const audioElement = event.composedPath()[0] as HTMLElement;

    if (target.classList.contains('rotate')) {
      const cardElement = event.composedPath()[1] as HTMLElement;
      if (cardElement.classList.contains('card')) {
        cardElement.classList.add('translate');
      }
    }

    if (target.classList.contains('back')) return;

    if (store.getState().theme.isTray) {
      const audioScr = audioElement.getAttribute('style')?.split('/');
      if (audioScr === undefined) return;
      const nameSrc = audioScr[audioScr.length - 1].split('.');
      const clickCard = JSON.parse(localStorage.getItem(nameSrc[0]) || '');
      clickCard.clicks += 1;
      localStorage.setItem(nameSrc[0], JSON.stringify(clickCard));

      if (this.audioCard === undefined) return;
      this.audioCard.autoplay = true;
      this.audioCard.src = `./audio/${nameSrc[0]}.mp3`;
    }
  }

  handlerStartGame(): void {
    if (this.game === undefined) this.game = new Game();
    if (this.btnStartGame?.element.querySelector('.repeat') !== null) {
      this.game.repeatGame();
    } else {
      this.btnStartGame?.RepeatStartGame();
      this.game.playGame(store.getState().game.cards);
      this.rating?.enableRaiting();
    }
  }

  async handlerClick(id: string): Promise<void> {
    const idPage = `#${id}`;
    const fieldCards = (await this.cards as ContainerCardModel[])
      .find((item) => getLink(item.category) === idPage);
    if (fieldCards === undefined) return;
    store.dispatch(getCategory(fieldCards.cards));
    this.createCards(fieldCards);
  }

  createCards(fieldCards: ContainerCardModel): void {
    const cardsList = fieldCards.cards
      .map((card) => new CardContainer(card));
    this.addNav(cardsList);
  }

  async createNav(): Promise<void> {
    const cards = (await this.cards as ContainerCardModel[]);
    parseStatistics(cards);
    const mainNav = cards
      .map((link) => new Link(link.category, ['main-card', 'green'], link.cards[0].image));
    this.addNav(mainNav);
  }

  render(): HTMLElement {
    return this.element;
  }
}
