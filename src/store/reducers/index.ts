import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { gameReducer } from './gameReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
