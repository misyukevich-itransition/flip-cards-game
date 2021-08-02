import './Home.scss';
import PrimaryLayout from '../../components/primary-layout/PrimaryLayout';
import Button from '../../components/button/Button';

const Home = () => {
  return (
    <PrimaryLayout>
      <div className="Home">
        <Button
          name="Start game"
          onButtonClick={() => console.log('HOME')}
        />
      </div>
    </PrimaryLayout>
  );
};

export default Home;

