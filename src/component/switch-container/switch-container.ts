import { BaseComponent } from '../base-component';
import { Switch } from '../switch/switch';

import './switch-container.css';

export class SwitchContainer extends BaseComponent {
  private switch: Switch;

  constructor() {
    super('div', ['switch-container']);
    this.switch = new Switch();
    this.element.appendChild(this.switch.element);
  }
}
