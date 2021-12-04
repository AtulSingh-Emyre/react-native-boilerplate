export interface IFacebookLoginData {
  accessToken: string;
  accessTokenSource: string;
  applicationId: number;
  dataAccessExpirationTime: number;
  declinedPermissions: any[];
  expirationTime: number;
  expiredPermissions: any[];
  lastRefreshTime: number;
  permissions: string[];
  userId: string;
}
export interface IFacebookUserData {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  name: string;
  picture: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    };
  };
}

export interface IGoogleUserData {
  idToken: null | string;
  scopes?: string[] | undefined;
  serverAuthCode: null | string;
  user: {
    email: null | string;
    familyName: null | string;
    givenName: null | string;
    id: null | string;
    name: null | string;
    photo: null | string;
  };
}
interface IUserAuthData {
  uid: string;
  id: string;
  name: string;
  avatar: string;
  work_mail: string;
  role: any;
  experience: number | undefined;
  phone: string;
  user_groups: any;
  profileStatus: string;
  business_name: string;
  business_account: boolean;
  website_url: string;
  description: string;
  DOB: Date;
  interests: any;
}

export interface IServerLoginResponse {
  data?: {
    token: string;
    user: string;
  };
  success: boolean;
  message?: string;
  status_code?: number;
}
