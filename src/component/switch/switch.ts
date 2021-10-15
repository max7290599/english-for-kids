import { changeTrain } from '../../redux/actions';
import { store } from '../../redux/store';
import { BaseComponent } from '../base-component';
import { Input } from '../input/input';
import { Span } from '../span/span';

import './switch.css';

export class Switch extends BaseComponent {
  private checkBox: Input;
  private switchLabel: Span;
  private switchHandle: Span;

  constructor() {
    super('label', ['switch']);
    this.checkBox = new Input(['switch-input'], 'checkbox', true);
    this.element.appendChild(this.checkBox.element);
    this.switchLabel = new Span('switch-label', 'Train', 'Play');
    this.switchHandle = new Span('switch-handle');
    this.element.appendChild(this.switchLabel.element);
    this.element.appendChild(this.switchHandle.element);
    this.checkBox.element.addEventListener('change', this.handleClick);
  }

  handleClick = (): void => {
    store.dispatch(changeTrain(this.checkBox.element.checked));
  };
}
