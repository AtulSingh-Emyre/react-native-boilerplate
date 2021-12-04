import _axios, {AxiosRequestConfig} from 'axios';
import {getEnvVariable} from '../environment';
import {ToastAndroid} from 'react-native';
import {User} from '../models/user';
import {AsyncStorageService} from './AsyncStorage';
export class Http {
  private static getToken = async () => {
    const user: User = await AsyncStorageService.getUser();
    return user ? user.idToken : null;
  };
  private static axios = _axios.create({
    baseURL: getEnvVariable().base_api_url,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  static async get(url, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const latestUrl = token
        ? url +
          '?auth=' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMGMzNWZlYjBjODIzYjQyNzdkZDBhYjIwNDQzMDY5ZGYzMGZkZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtbmF0aXZlLWNvdXJzZS1kMmFlZiIsImF1ZCI6InJlYWN0LW5hdGl2ZS1jb3Vyc2UtZDJhZWYiLCJhdXRoX3RpbWUiOjE1ODYzODQ5MjIsInVzZXJfaWQiOiJBV2RSeTRqdktSaFBoZlZBbHJaT0VZOE9Xc1EyIiwic3ViIjoiQVdkUnk0anZLUmhQaGZWQWxyWk9FWThPV3NRMiIsImlhdCI6MTU4NjM4NDkyMiwiZXhwIjoxNTg2Mzg4NTIyLCJlbWFpbCI6InNoYWd1bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2hhZ3VuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.xeirgGYxtC4xtl_rzDkmTu3Mi9Ra7ZFDo7pmJUxIQ-DOtqK6KwekKbN0udiO-JClSpDXqG8m-bfH-xAXOjs07hn_RfqNhV9X82KHm3t12BVMZH-rOU-7u15CFzWtuwW55RiTyuEUMBfgzxa-GUPFkG7C_LJMkRXyTBQwh5YyDIBk1kUkfhXYafqpwGAffADV9LU1JnABry0kD1j4nqgQlC1t-WcbJ_EBedCMlShy1RgY7Y8tvy9qb8Fiib2q92mSbhvZlKh3IvigG4Zxypuu230Stsf-tJwuq0s-clXJZD1XnHfv5RpTsvKxQjeghzlU_uTu8whDiwm6A2Ogqot2hw'
        : url;
      const response = await Http.axios.get(latestUrl, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  static async post(url, body?: object, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const latestUrl = token
        ? url +
          '?auth=' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMGMzNWZlYjBjODIzYjQyNzdkZDBhYjIwNDQzMDY5ZGYzMGZkZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtbmF0aXZlLWNvdXJzZS1kMmFlZiIsImF1ZCI6InJlYWN0LW5hdGl2ZS1jb3Vyc2UtZDJhZWYiLCJhdXRoX3RpbWUiOjE1ODYzNzc1MDgsInVzZXJfaWQiOiJBV2RSeTRqdktSaFBoZlZBbHJaT0VZOE9Xc1EyIiwic3ViIjoiQVdkUnk0anZLUmhQaGZWQWxyWk9FWThPV3NRMiIsImlhdCI6MTU4NjM3NzUwOCwiZXhwIjoxNTg2MzgxMTA4LCJlbWFpbCI6InNoYWd1bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2hhZ3VuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m8VPP_-WZRM9E60uS5WbnK-E5nbB4Kd_w2-DKuhyeBJLLDsx5DKCSWSnVBsCJNE9tuFesshuCYHHqv7vN7w8yR7147GWGp-wmKs8mvOaWw-dy0aUdL2nT7J0xLBQxGkZko9ufQq8biPxYpzSwbovYicYWzfobiZapFPscL8hGA02vOeENKDJTPj3AfRr6cnNZLkgAOPIeRjWCq135lBCn59ztE_8CQsOKx7f-eOalZ4Qp4w-uvKijipLOJiTn_sXnpHUzvMVbIT4-Wb4mYPMkrXYMfrniEp-AO1Kqi3CjUd9f6pRBACzKrhrJpMjBXGogpzEBwpfFjsKaaJ1Np-m8w'
        : url;
      const response = await Http.axios.post(latestUrl, body, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  static async patch(url, body?: object, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const latestUrl = token
        ? url +
          '?auth=' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMGMzNWZlYjBjODIzYjQyNzdkZDBhYjIwNDQzMDY5ZGYzMGZkZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtbmF0aXZlLWNvdXJzZS1kMmFlZiIsImF1ZCI6InJlYWN0LW5hdGl2ZS1jb3Vyc2UtZDJhZWYiLCJhdXRoX3RpbWUiOjE1ODYzNzc1MDgsInVzZXJfaWQiOiJBV2RSeTRqdktSaFBoZlZBbHJaT0VZOE9Xc1EyIiwic3ViIjoiQVdkUnk0anZLUmhQaGZWQWxyWk9FWThPV3NRMiIsImlhdCI6MTU4NjM3NzUwOCwiZXhwIjoxNTg2MzgxMTA4LCJlbWFpbCI6InNoYWd1bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2hhZ3VuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m8VPP_-WZRM9E60uS5WbnK-E5nbB4Kd_w2-DKuhyeBJLLDsx5DKCSWSnVBsCJNE9tuFesshuCYHHqv7vN7w8yR7147GWGp-wmKs8mvOaWw-dy0aUdL2nT7J0xLBQxGkZko9ufQq8biPxYpzSwbovYicYWzfobiZapFPscL8hGA02vOeENKDJTPj3AfRr6cnNZLkgAOPIeRjWCq135lBCn59ztE_8CQsOKx7f-eOalZ4Qp4w-uvKijipLOJiTn_sXnpHUzvMVbIT4-Wb4mYPMkrXYMfrniEp-AO1Kqi3CjUd9f6pRBACzKrhrJpMjBXGogpzEBwpfFjsKaaJ1Np-m8w'
        : url;
      const response = await Http.axios.patch(latestUrl, body, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  static async delete(url, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const latestUrl = token
        ? url +
          '?auth=' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMGMzNWZlYjBjODIzYjQyNzdkZDBhYjIwNDQzMDY5ZGYzMGZkZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtbmF0aXZlLWNvdXJzZS1kMmFlZiIsImF1ZCI6InJlYWN0LW5hdGl2ZS1jb3Vyc2UtZDJhZWYiLCJhdXRoX3RpbWUiOjE1ODYzNzc1MDgsInVzZXJfaWQiOiJBV2RSeTRqdktSaFBoZlZBbHJaT0VZOE9Xc1EyIiwic3ViIjoiQVdkUnk0anZLUmhQaGZWQWxyWk9FWThPV3NRMiIsImlhdCI6MTU4NjM3NzUwOCwiZXhwIjoxNTg2MzgxMTA4LCJlbWFpbCI6InNoYWd1bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2hhZ3VuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m8VPP_-WZRM9E60uS5WbnK-E5nbB4Kd_w2-DKuhyeBJLLDsx5DKCSWSnVBsCJNE9tuFesshuCYHHqv7vN7w8yR7147GWGp-wmKs8mvOaWw-dy0aUdL2nT7J0xLBQxGkZko9ufQq8biPxYpzSwbovYicYWzfobiZapFPscL8hGA02vOeENKDJTPj3AfRr6cnNZLkgAOPIeRjWCq135lBCn59ztE_8CQsOKx7f-eOalZ4Qp4w-uvKijipLOJiTn_sXnpHUzvMVbIT4-Wb4mYPMkrXYMfrniEp-AO1Kqi3CjUd9f6pRBACzKrhrJpMjBXGogpzEBwpfFjsKaaJ1Np-m8w'
        : url;
      const response = await Http.axios.delete(latestUrl, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  private static handleErrors(error) {
    if (error.response) {
      const message = error.response.data.message;
      const errorMessage = message
        ? message
        : 'Something Went Wrong. Please Try Again';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    } else {
      ToastAndroid.show(
        'Something Went Wrong.Please Try Again',
        ToastAndroid.LONG,
      );
    }
  }
}
