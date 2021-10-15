import { BaseComponent } from '../base-component';

import './statistic.css';

export class Statistic extends BaseComponent {

  constructor(idPage: string) {
    super('div', ['statistic']);
    this.setTableStatistic();
    this.element.id = idPage;
    this.element.innerHTML = `
    <table class="table" cellspacing="0" cellpadding="0">
      <thead>
        <th>Word</th>
        <th>Category</th>
        <th>Translation</th>
        <th>Clicks</th>
        <th>Correct</th>
        <th>Wrong</th>
        <th>% errors</th>
      </thead>
      <tbody>
    ${this.setTableStatistic()}
      <tbody>
    </table>`;
  }

  setTableStatistic = (): string => {
    const keys = Object.keys(localStorage);
    const tableRow = keys.map((key: string): string => {
      const localData = JSON.parse(localStorage.getItem(key) || '');
      return `<tr>
        <td>${localData.word}</td>
        <td>${localData.category}</td>
        <td>${localData.translation}</td>
        <td>${localData.clicks}</td>
        <td>${localData.correct}</td>
        <td>${localData.wrong}</td>
        <td>${localData.perCent}</td>
      </tr>`;
    });
    return tableRow.join('');
  };

  render(): HTMLElement {
    return this.element;
  }
}
