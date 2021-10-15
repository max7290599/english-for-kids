export interface CardModel {
  word: string,
  translation: string,
  image: string,
  audioSrc: string
}

export interface ContainerCardModel {
  category: string,
  cards: CardModel[]
}

export interface ReducerCardModel {
  cards: CardModel[]
}
