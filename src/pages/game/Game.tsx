import './Game.scss';
import Button from '../../components/button/Button';
import PrimaryLayout from '../../components/primary-layout/PrimaryLayout';

const Game = () => {
  return (
    <PrimaryLayout>
      <div className="Game">
        <Button
          name="Flip cards"
          onButtonClick={() => console.log('FLIP')}
        />
      </div>
    </PrimaryLayout>
  );
};

export default Game;
