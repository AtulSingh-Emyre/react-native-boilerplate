import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {DiaryReducer, DiaryReducerState} from './DiaryReducer';
import {UserReducer, UserReducerState} from './UserReducer';
import thunk from 'redux-thunk';
export interface RootReducerState {
  diaryReducer: DiaryReducerState;
  userReducer: UserReducerState;
}
export const rootReducer = combineReducers({
  diaryReducer: DiaryReducer,
  userReducer: UserReducer,
});
let composeEnhancers = compose;

// if (__DEV__) {
// composeEnhancers =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
