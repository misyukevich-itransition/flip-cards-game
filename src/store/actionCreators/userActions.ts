import { UserActionTypes } from '../types/user';
import { InitUserAction } from '../interfaces/user';

export const initUser = (name: string): InitUserAction => {
  return {
    type: UserActionTypes.INIT_USER,
    payload: {
      name,
      results: [],
    },
  };
};
