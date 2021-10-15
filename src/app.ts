import { Header } from './component/header/header';
import { Router } from './router';

export class App {
  private readonly header: Header;
  private router: Router;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.router = new Router();
  }

  enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      const page = this.router.renderNewPage(hash);
      const pageHTML = page.render();
      this.rootElement.append(pageHTML);
    });
  }

  render(): void {
    const page = this.router.renderNewPage('mainPage');
    const pageHTML = page.render();
    pageHTML.id = this.router.defaultPageId;
    this.enableRouteChange();

    this.rootElement.append(pageHTML);
  }
}
