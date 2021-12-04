import {UserRoles} from '../ReducerTypes/UserReducerTypes';

export interface IUserProfileItem {
  "_id":string,
  "name":string,
  "work_mail":string,
  "roles":string[],
  "phone":string,
  "profileStatus":string,
  "sebiReg_No":string,
  "business_name":string,
  "business_account":boolean,
  "website_url":string,
  "description":string,
  "experience":number,
  "DOB":any,
  "interests":string[],
  "avatar":string,
  "created_at":any,
  "analystPostSignalCount":number,
  "traderSaveSignalCount":number,
  "followersCount":number,
  "followingCount":number,
  "isFollowing":boolean
}

export const DefaultProfileOject: IUserProfileItem = {
  DOB: '',
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/tradycoon-3fb5c.appspot.com/o/staticImage%2FNo-User-Avtar-min.jpeg?alt=media&token=da118ac6-7ba5-422f-a4d4-e3e830ba8358',
  business_account: true,
  business_name: '',
  description: '',
  experience: 0,
  interests: [],
  isFollowing: false,
  name: '',
  phone: '',
  _id:'',
  analystPostSignalCount:0,
  created_at:'',
  followersCount:0,
  followingCount:0,
  profileStatus: '',
  traderSaveSignalCount: 0,
  roles: [UserRoles.TRADER],
  sebiReg_No: '',
  website_url: '',
  work_mail: '',
};

export interface IUser {
  _id?: string;
  uid?: string;
  name?: string;
  work_mail?: string;
  roles?: Array<UserRoles>;
  phone?: string;
  profileStatus?: string;
  sebiReg_No?: string;
  business_name?: string;
  business_account?: boolean;
  website_url?: string;
  description?: string;
  experience?: number;
  DOB?: Date;
  interests?: Array<string>;
  isActive?: boolean;
  auth_route?: string;
  avatar: string;
  created_at?: string;
  updated_at?: string;
}
