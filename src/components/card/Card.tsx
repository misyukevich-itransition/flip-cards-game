import React from 'react';
import { useClassName } from '../../hooks/useClassName/useClassName';
import './Card.scss';

interface ICardProps {
  name: string;
}

const Card: React.FC<ICardProps> = ({
    name,
}) => {
  const cn = useClassName('Card');

  return (
    <div className={cn()}>{name}</div>
  )
}

export default Card;
