import './Home.scss';
import { useHistory } from 'react-router-dom';
import { ChangeEventHandler, useState } from 'react';
import PrimaryLayout from '../../components/primary-layout/PrimaryLayout';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { RoutePath } from '../../enums/RoutePath';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const Home = () => {
  const { name } = useTypedSelector(({ user }) => user);

  const [username, setUsername] = useState(name);

  const { initUser } = useActions();

  const history = useHistory();

  const onChangeUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsername(event.currentTarget.value);
  };

  const onStartGame = () => {
    if (!username) {
      return;
    }

    if (name !== username) {
      initUser(username);
    }

    history.push(RoutePath.Game);
  };

  return (
    <PrimaryLayout>
      <form className="Home" onSubmit={onStartGame}>
        <Input onInputChange={onChangeUserName} userName={username} />
        <Button name="Start game" />
      </form>
    </PrimaryLayout>
  );
};

export default Home;
