import { BaseComponent } from '../base-component';

export class Span extends BaseComponent {
  constructor(className: string, dataOn?: string, dataOff?: string) {
    super('span', [className]);
    if (dataOn === undefined || dataOff === undefined) return;
    this.element.setAttribute('data-on', dataOn);
    this.element.setAttribute('data-off', dataOff);
  }
}
