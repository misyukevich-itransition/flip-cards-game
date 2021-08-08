import './Score.scss';
import PrimaryLayout from '../../components/primary-layout/PrimaryLayout';
import Button from '../../components/button/Button';

const Score = () => {
  return (
    <PrimaryLayout>
      <div className="Score">
        <Button name="Score" onButtonClick={() => console.log('SCORE')} />
      </div>
    </PrimaryLayout>
  );
};

export default Score;
