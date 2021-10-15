import { CardModel, ContainerCardModel } from '../../models/card-model';

export const parseStatistics = (data: ContainerCardModel[]): void => {
  data.forEach((item) => {
    item.cards.forEach((card: CardModel) => {
      localStorage.setItem(card.word, JSON.stringify({
        word: card.word,
        clicks: 0,
        correct: 0,
        perCent: 0,
        wrong: 0,
        translation: card.translation,
        category: item.category,
        ...JSON.parse(localStorage.getItem(card.word) || 'null'),
      }));
    });
  });
};
