import {DiaryActionTypes} from '../actions/DiaryActions';
import {DiaryItem} from '../../models/DiaryItem';
import {UserActionTypes} from '../actions/UserActions';

export interface DiaryReducerState {
  diaryItems: DiaryItem[];
  loading: boolean;
  loaded: boolean;
}

const initialState: DiaryReducerState = {
  diaryItems: [],
  loaded: false,
  loading: false,
};

export const DiaryReducer = (
  state = initialState,
  action: any,
): DiaryReducerState => {
  switch (action.type) {
    case DiaryActionTypes.REQUEST_DIARY_LIST: {
      return {...state, loading: true};
    }
    case DiaryActionTypes.DIARY_LISTS_SUCCESS: {
      console.log(action.payload, 'called');
      return {
        ...state,
        diaryItems: action.payload,
        loading: false,
        loaded: true,
      };
    }
    case DiaryActionTypes.DIARY_ERROR: {
      return {...initialState};
    }

    case DiaryActionTypes.ADD_DIARY_ITEM: {
      const diaryItems = state.diaryItems.concat(action.payload);
      return {...state, diaryItems};
    }
    case DiaryActionTypes.UPDATE_DIARY_ITEM: {
      const filteredItems = state.diaryItems.filter(
        data => data.id !== action.payload.id,
      );
      filteredItems.push(action.payload);
      return {...state, diaryItems: filteredItems};
    }
    case DiaryActionTypes.DELETE_DIARY_ITEM: {
      const diaryItems = state.diaryItems;
      const filteredItems = diaryItems.filter(
        data => data.id !== action.payload,
      );
      return {...state, diaryItems: filteredItems};
    }
    case UserActionTypes.USER_LOGOUT: {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
};
