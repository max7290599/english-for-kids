export class Input {
  readonly element: HTMLInputElement;

  constructor(styles: string[] = [], type: string, checked: boolean) {
    this.element = document.createElement('input');
    this.element.classList.add(...styles);
    this.element.setAttribute('type', type);
    this.element.checked = checked;
  }
}
