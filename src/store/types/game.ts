export interface GameState {
  isRestart: boolean;
}

export enum GameActionTypes {
  RESTART = 'RESTART',
}

export interface RestartAction {
  type: GameActionTypes.RESTART;
  payload: boolean;
}

export type GameAction =
  | RestartAction;
