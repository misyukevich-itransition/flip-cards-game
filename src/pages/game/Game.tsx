import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import PrimaryLayout from '../../components/primary-layout/PrimaryLayout';
import { RoutePath } from '../../enums/RoutePath';
import './Game.scss';

const Game = () => {
  const history = useHistory();

  const onMenuClick = () => {
    history.push(RoutePath.Home);
  };

  return (
    <PrimaryLayout>
      <div className="Game">
        <div className="Game__sidebar">
          <div>MATCHES</div>
          <Button name="Menu" onButtonClick={onMenuClick} />
        </div>
        <div className="Game__cards">CARDS</div>
        <div className="Game__sidebar">
          <div>TURNS</div>
          <Button name="Restart" onButtonClick={() => console.log('FLIP')} />
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Game;
