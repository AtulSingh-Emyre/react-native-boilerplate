import {getEnvVariable} from '../environment';
import {Http} from './http';

export class Api {
  static login(data: any) {
    return Http.post(getEnvVariable().auth_url, data, {baseURL: ''});
  }
  static getDiaryItems() {
    return Http.get('/diary.json');
  }
  static addDiaryItem(data: any) {
    return Http.post('/diary.json', data);
  }
  static updateDiaryItem(data: any, id: any) {
    return Http.patch('/diary/' + `${id}.json`, data);
  }
  static deleteDiaryItem(id: any) {
    return Http.delete('/diary/' + `${id}.json`);
  }
}
