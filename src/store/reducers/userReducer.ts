import { UserAction, UserActionTypes } from '../types/user';
import { UserState } from '../interfaces/user';

const initialState: UserState = {
  name: '',
  results: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionTypes.INIT_USER:
      return action.payload;
    default:
      return state;
  }
};
