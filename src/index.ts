import { App } from './app';
import { store } from './redux/store';

import './style.css';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) throw Error('App root element not found');
  store.dispatch({ type: 'INIT_APPLICATION' });
  /* eslint-disable no-new */
  new App(appElement).render();
};
