import { ContainerCardModel } from '../../models/card-model';
import { BaseComponent } from '../base-component';
import { Link } from '../link/link';
import { getData } from '../shared/get-data';

import './menu.css';

export class Menu extends BaseComponent {
  private nav: Promise<ContainerCardModel[] | string[]>;

  constructor() {
    super('ul', ['menu', 'green']);
    this.nav = getData('category');
    this.createNav();
  }

  addNav(link: Link[]): void {
    link.forEach((item) => this.element.appendChild(item.element));
  }

  async createNav(): Promise<void> {
    const headerNav = (await this.nav as string[])
      .map((link) => new Link(link, ['header-item']));
    this.addNav(headerNav);
  }

  public getPlayChange(): void {
    this.element.classList.remove('green');
  }

  public getTrainChange(): void {
    this.element.classList.add('green');
  }
}
