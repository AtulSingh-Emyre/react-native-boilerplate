import {UserRoles} from '../ReducerTypes/UserReducerTypes';

export interface IUserServerAuthDataResponse {
  id: string;
  name: string;
  avatar: string;
}

export interface IUserAuthData {
  uid: string;
  phone?: string;
  work_mail?: string;
  idToken?: string;
  avatar?: string | null;
  name?: string;
  role?: UserRoles[];
  auth_route: string;
  isNewUser: boolean;
}

export interface IDeviceInfo {
  user_id: string;
  deviceToken: string;
}
