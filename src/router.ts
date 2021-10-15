import { Container } from './component/container/container';
import { Statistic } from './component/statistic/statistic';

export const enum PageIds {
  MainPage = 'mainPage',
  StatisticPage = 'statistic',
}

export class Router {
  defaultPageId = 'mainPage';

  renderNewPage(idPage: string): Container | Statistic {
    const currentPageHTML = document.querySelector(`#${this.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    (document.querySelector('.input') as HTMLInputElement).checked = false;
    document.querySelector('.container')?.remove();
    document.querySelector('.statistic')?.remove();
    let page: Statistic | Container;
    switch (idPage) {
      case PageIds.StatisticPage: {
        page = new Statistic(idPage);
        break;
      }
      case PageIds.MainPage: {
        page = new Container(idPage);
        break;
      }
      default:
        page = new Container(idPage);
    }
    return page;
  }
}
