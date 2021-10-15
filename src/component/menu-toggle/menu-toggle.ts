import { BaseComponent } from '../base-component';
import { Input } from '../input/input';
import { Menu } from '../menu/menu';

import './menu-toggle.css';

export class MenuToggle extends BaseComponent {
  private checkbox: Input;
  private menu: Menu;

  constructor() {
    super('div', ['menuToggle']);
    this.checkbox = new Input(['input'], 'checkbox', false);
    this.element.appendChild(this.checkbox.element);
    this.element.appendChild(document.createElement('span'));
    this.element.appendChild(document.createElement('span'));
    this.element.appendChild(document.createElement('span'));
    this.menu = new Menu();
    this.element.appendChild(this.menu.element);
    document.addEventListener('click', (ev: Event) => this.handlerClick(ev));
  }

  handlerClick = (ev: Event): void => {
    const target = ev.target as HTMLElement;
    if (target.classList.contains('menu')) {
      this.checkbox.element.checked = true;
    } else if (!target.classList.contains('input')) {
      this.checkbox.element.checked = false;
    }
  };
}
