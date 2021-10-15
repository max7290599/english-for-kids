import { BaseComponent } from '../base-component';
import { MenuToggle } from '../menu-toggle/menu-toggle';

import './nav.css';

export class Nav extends BaseComponent {
  private menuToggle: MenuToggle;

  constructor(role: string) {
    super('nav', ['nav']);
    this.element.setAttribute('role', role);
    this.menuToggle = new MenuToggle();
    this.element.appendChild(this.menuToggle.element);
  }
}
