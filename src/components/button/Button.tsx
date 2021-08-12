import React from 'react';
import { useClassName } from '../../hooks/useClassName/useClassName';
import './Button.scss';
import { ContentButtonSize, Size } from './enum/ContentButtonSize';

interface IButtonProps {
  name: string;
  onButtonClick?: () => void;
  size?: ContentButtonSize;
}

const Button: React.FC<IButtonProps> = ({
    name,
    size = Size.Lg,
    onButtonClick
}) => {
  const cn = useClassName('Button');

  return (
    <button className={cn({ small: size === Size.Sm })} onClick={onButtonClick}>
      {name}
    </button>
  );
};

export default Button;
