export interface IGroupClients {
  name: string;
  mob: number;
  email: string;
  id: string;
}

export enum UserRoles {
  TRADER = 'trader',
  ANALYST = 'analyst',
}

export enum ProfileStatus {
  NEW_USER = 'new',
  COMPLETE_TRADER_PROFILE = 'ct',
  COMPLETE_ANALYST_PROFILE = 'ca',
  VERIFIED_ANALYST = 'va',
  VERIFIED_TRADER = 'vt',
  REQUEST_FOR_ANALYST = 'ra',
  REQUEST_FOR_TRADER = 'rt',
}

export const initialUser = {
  parsedData: {
    groups: {},
    role: [{Analyst: false}, {Trader: false}],
    token: '',
    user: {
      DOB: '',
      avatar: '',
      business_account: false,
      business_name: '',
      description: '',
      experience: 0,
      id: '',
      interests: [],
      profileStatus: '',
      name: '',
      phone: '',
      role: [UserRoles.TRADER],
      website_url: '',
      work_mail: '',
      Total_post: 0,
      Total_followers: 0,
      Total_following: 0,
      Total_likes: 0,
    },
  },
  success: true,
};

// export interface IClientGroups{

//   groupId:string;
//   groupClients:Array<IGroupClients>

// }

// export interface IUserReducerTypes {
//   exists:boolean;
//   groups:Array<IClientGroups>
// }
