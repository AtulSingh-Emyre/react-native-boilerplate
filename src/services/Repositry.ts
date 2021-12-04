import {DiaryActions} from '../redux/actions/DiaryActions';
import {Api} from './Api';
import {DiaryItem} from '../models/DiaryItem';
import {swap} from 'formik';

export class Repositry {
  static getDiaryItems(
    status: {loading: boolean; loaded: boolean},
    force = false,
  ) {
    return async dispatch => {
      try {
        if ((!status.loaded && !status.loading) || force) {
          dispatch(DiaryActions.DiaryListRequestAction());
          const data = await Api.getDiaryItems();
          const diaryItems: DiaryItem[] = [];
          for (let key in data) {
            diaryItems.push({...data[key], id: key});
          }
          dispatch(DiaryActions.DiaryListSuccessAction(diaryItems));
        } else {
          return;
        }
      } catch (e) {
        dispatch(DiaryActions.DiaryErrorOccured());
        return Promise.reject(e);
      }
    };
  }
  static addDiaryItem(data: DiaryItem) {
    return async dispatch => {
      try {
        const id = await Api.addDiaryItem(data);
        const diaryItem = {...data, id: id};
        dispatch(DiaryActions.AddDiaryItemAction(diaryItem));
        return diaryItem;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  static updateDiaryItem(data: DiaryItem) {
    return async dispatch => {
      try {
        const updatedData = {
          subject: data.subject,
          description: data.description,
          timeStamp: data.timeStamp,
          images: data.images,
        };
        const response = await Api.updateDiaryItem(updatedData, data.id);
        const diaryItem = {...response, id: data.id};
        dispatch(DiaryActions.UpdateDiaryItemAction(diaryItem));
        return response;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  static deleteDiaryItem(id) {
    return async dispatch => {
      try {
        const data = await Api.deleteDiaryItem(id);
        dispatch(DiaryActions.DeleteDiaryItemAction(id));
        return data;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
}
