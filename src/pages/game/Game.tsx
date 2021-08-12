import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import PrimaryLayout from '../../components/primary-layout/PrimaryLayout';
import { RoutePath } from '../../enums/RoutePath';
import { Size } from '../../components/button/enum/ContentButtonSize';
import { useClassName } from '../../hooks/useClassName/useClassName';
import GameCards from '../../components/gameCards/GameCards';
import Frame from '../../components/frame/Frame';
import { useActions } from '../../hooks/useAction';
import './Game.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Game = () => {
  const cn = useClassName('Game');

  const { isRestart } = useTypedSelector(({ game }) => game);
  const { restart } = useActions();

  const history = useHistory();

  const onRestartGame = () => {
    restart(true);
  };

  const onMenuClick = () => {
    history.push(RoutePath.Home);
  };

  useEffect(() => {
    if (isRestart) {
      // resetCards();
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setTimeout(() => restart(false), 1000);
      // restart(false);
    }
  }, [isRestart]);

  return (
    <PrimaryLayout>
      <div className={cn()}>
        <div className={cn('info')}>
          <Frame header="MATCHES" content={2} />
          <Frame header="TURNS" content={2} />
        </div>

        <div className={cn('cards')}>
          {
            !isRestart ? <GameCards /> : <div>AAAAAaAAAAAAAAAA</div>
          }
        </div>

        <div className={cn('controls')}>
          <Button name="Menu" size={Size.Sm} onButtonClick={onMenuClick} />
          <Button name="Restart" size={Size.Sm} onButtonClick={onRestartGame} />
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Game;
