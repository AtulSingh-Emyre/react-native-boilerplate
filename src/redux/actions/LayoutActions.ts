export enum LayoutActionTypes {
  UPDATE_LOGGED_IN_STATUS = 'update logged in status',
}
export class LayoutActions {
  static UpdateLoggedInStatus = (isLoggedIn: boolean) => ({
    type: LayoutActionTypes.UPDATE_LOGGED_IN_STATUS,
    payload: isLoggedIn,
  });
}
