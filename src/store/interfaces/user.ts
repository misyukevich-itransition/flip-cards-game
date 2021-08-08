import { UserActionTypes } from '../types/user';

export interface IResult {
  turns: number;
}

export interface UserState {
  name: string;
  results: IResult[];
}

export interface InitUserAction {
  type: UserActionTypes.INIT_USER;
  payload: UserState;
}
