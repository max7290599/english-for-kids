import { BaseComponent } from '../base-component';
import { Nav } from '../nav/nav';
import { SwitchContainer } from '../switch-container/switch-container';

import './header.css';

export class Header extends BaseComponent {
  private nav: Nav;
  private switchContainer: SwitchContainer;

  constructor() {
    super('header', ['header']);
    this.nav = new Nav('navigation');
    this.element.appendChild(this.nav.element);
    this.switchContainer = new SwitchContainer();
    this.element.appendChild(this.switchContainer.element);
  }
}
