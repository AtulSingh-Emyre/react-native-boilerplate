import {DiaryItem} from '../../models/DiaryItem';

export enum DiaryActionTypes {
  ADD_DIARY_ITEM = 'Add diary Item',
  UPDATE_DIARY_ITEM = 'update diary Item',
  DELETE_DIARY_ITEM = 'delete diary Item',
  REQUEST_DIARY_LIST = ' Request diary list',
  DIARY_LISTS_SUCCESS = ' Success diary list',
  DIARY_ERROR = 'Diary Error Occured',
}

export class DiaryActions {
  static AddDiaryItemAction = (diaryItem: DiaryItem) => {
    return {
      type: DiaryActionTypes.ADD_DIARY_ITEM,
      payload: diaryItem,
    };
  };
  static UpdateDiaryItemAction = (diaryItem: DiaryItem) => {
    return {
      type: DiaryActionTypes.UPDATE_DIARY_ITEM,
      payload: diaryItem,
    };
  };

  static DeleteDiaryItemAction = (id: number) => {
    return {
      type: DiaryActionTypes.DELETE_DIARY_ITEM,
      payload: id,
    };
  };
  static DiaryListRequestAction = () => {
    return {
      type: DiaryActionTypes.REQUEST_DIARY_LIST,
    };
  };
  static DiaryListSuccessAction = (diaryList: DiaryItem[]) => {
    return {
      type: DiaryActionTypes.DIARY_LISTS_SUCCESS,
      payload: diaryList,
    };
  };
  static DiaryErrorOccured = () => ({
    type: DiaryActionTypes.DIARY_ERROR,
  });
}
