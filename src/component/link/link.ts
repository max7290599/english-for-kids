import { BaseComponent } from '../base-component';
import { getLink } from '../shared/get-link';

export class Link extends BaseComponent {
  private image?: HTMLImageElement;

  constructor(readonly link: string, className: string[], linkImg?: string) {
    super('a', className);
    this.element.setAttribute('href', `${getLink(link)}`);
    this.element.innerHTML = link;
    this.element.addEventListener('click', this.handleClick);
    if (linkImg === undefined) return;
    this.image = document.createElement('img');
    this.image.src = linkImg;
    this.element.appendChild(this.image);
  }

  handleClick = (): void => {
    document.querySelectorAll('.header-item').forEach((n) => n.classList.remove('active'));
    this.element.classList.add('active');
    document.querySelector('.container')?.classList.remove('main-container');
  };
}
