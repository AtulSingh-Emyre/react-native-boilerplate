import {UserActionTypes} from '../actions/UserActions';
import {User} from '../../models/user';

export interface UserReducerState {
  user: User;
  loggedIn: boolean;
  loggingIn: boolean;
}
const initialState: UserReducerState = {
  user: null,
  loggedIn: false,
  loggingIn: false,
};

export const UserReducer = (state = initialState, action): UserReducerState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST: {
      return {...state, loggingIn: true};
    }
    case UserActionTypes.LOGIN_REQUEST_SUCCESS:
    case UserActionTypes.USER_UPDATE: {
      return {...state, loggingIn: false, loggedIn: true, user: action.payload};
    }
    case UserActionTypes.USER_ERROR_OCCURRED: {
      return {...initialState};
    }
    case UserActionTypes.USER_LOGOUT: {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
};
