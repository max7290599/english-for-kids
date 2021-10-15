import { ActionCarModel, ActionThemeModel } from '../models/action-model';
import { CardModel } from '../models/card-model';
import { CHANGE_TRAIN, GET_ACTIVE_CATEGORY } from './types';

export function changeTrain(isTrain: boolean): ActionThemeModel {
  return {
    type: CHANGE_TRAIN,
    payload: isTrain,
  };
}

export function getCategory(cardModel: CardModel[]): ActionCarModel {
  return {
    type: GET_ACTIVE_CATEGORY,
    payload: cardModel,
  };
}
