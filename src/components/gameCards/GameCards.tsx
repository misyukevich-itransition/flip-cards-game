import { useClassName } from '../../hooks/useClassName/useClassName';
import Card from '../card/Card';
import './GameCards.scss';

const GameCards = () => {
  const cn = useClassName('GameCards');
  const images = [
    'Jake', 'Jon', 'Thruster', 'Jon', 'Jake', 'Jon',
    'Thruster', 'Jake', 'Jon', 'Thruster', 'Jake', 'Jon',
    'Thruster', 'Jake', 'Jon', 'Thruster', 'Thruster', 'Jake',
    'Jake', 'Jon', 'Thruster', 'Jon', 'Jake', 'Jon'
  ];

  return (
    <div className={cn()}>
      { images.map((image, i) => <Card name={image} key={i} />) }
    </div>
  )
}

export default GameCards;
