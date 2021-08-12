import { GameActionTypes, RestartAction } from '../types/game';

export const restart = (isRestart: boolean): RestartAction => ({
  type: GameActionTypes.RESTART,
  payload: isRestart,
});
