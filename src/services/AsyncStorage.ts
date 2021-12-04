import AsyncStorage from '@react-native-community/async-storage';
export class AsyncStorageService {
  private static readonly USER = 'user';

  static setUser(data: object) {
    return AsyncStorage.setItem(AsyncStorageService.USER, JSON.stringify(data));
  }
  static async getUser() {
    try {
      const response = await AsyncStorage.getItem(AsyncStorageService.USER);
      return JSON.parse(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  static clearUser() {
    return AsyncStorage.removeItem(AsyncStorageService.USER);
  }
}
