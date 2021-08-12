import { GameAction, GameActionTypes, GameState } from '../types/game';

const initialState: GameState = {
  isRestart: false,
};

export const gameReducer = (
  state = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionTypes.RESTART:
      return { ...state, isRestart: action.payload };
    default:
      return state;
  }
};
