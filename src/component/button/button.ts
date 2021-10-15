import { BaseComponent } from '../base-component';

import './button.css';

export class Button extends BaseComponent {
  private button: HTMLButtonElement;

  constructor(name: string, className: string) {
    super('div', ['btns']);
    this.button = document.createElement('button');
    this.button.classList.add(className);
    this.button.innerHTML = name;
    this.element.append(this.button);
  }

  RepeatStartGame(): void {
    this.button.classList.add('repeat');
  }
}
