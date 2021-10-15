import { CardModel, ContainerCardModel } from './card-model';

export interface ActionModel {
  type: string,
  payload?: boolean | ContainerCardModel | CardModel[]
}

export interface ActionThemeModel {
  type: string,
  payload: boolean
}

export interface ActionCarModel {
  type: string,
  payload?: CardModel[]
}
