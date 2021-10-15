import { combineReducers } from 'redux';
import { ActionCarModel, ActionThemeModel } from '../models/action-model';
import { ReducerCardModel } from '../models/card-model';
import { CHANGE_TRAIN, GET_ACTIVE_CATEGORY } from './types';

const initialThemeState: { isTray: boolean } = {
  isTray: true,
};

function themeReducer(state = initialThemeState, action: ActionThemeModel) {
  switch (action.type) {
    case CHANGE_TRAIN:
      return { ...state, isTray: action.payload };
    default: return state;
  }
}

const initialCardsState: ReducerCardModel = {
  cards: [],
};

function getCardReduser(state = initialCardsState, action: ActionCarModel): ReducerCardModel {
  switch (action.type) {
    case GET_ACTIVE_CATEGORY:
      return { ...state, cards: action.payload || [] };

    default: return state;
  }
}

export const rootReducers = combineReducers({
  theme: themeReducer,
  game: getCardReduser,
});
