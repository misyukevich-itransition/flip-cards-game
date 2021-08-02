import React from 'react';
import './Button.scss';

interface IButtonProps {
  name: string;
  onButtonClick: () => void;
}

const Button: React.FC<IButtonProps> = ({
  name,
  onButtonClick,
  }) => {
  return (
    <button onClick={onButtonClick}>{name}</button>
  );
};

export default Button;

