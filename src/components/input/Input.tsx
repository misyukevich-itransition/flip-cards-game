import './Input.scss';
import React, { ChangeEvent } from 'react';
import { useClassName } from '../../hooks/useClassName/useClassName';

interface IInputProps {
  userName: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ userName, onInputChange }) => {
  const cn = useClassName('Form');

  return (
    <div className={cn()}>
      <input
        type="input"
        className={cn('field')}
        placeholder="Name"
        autoComplete="off"
        required
        value={userName}
        onChange={onInputChange}
      />

      <label htmlFor="name" className={cn('label')}>
        Name
      </label>
    </div>
  );
};

export default Input;
