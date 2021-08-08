import './Input.scss';
import React, { ChangeEvent } from 'react';

interface IInputProps {
  userName: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ userName, onInputChange }) => {
  return (
    <div className="Form">
      <input
        type="input"
        className="Form__field"
        placeholder="Name"
        autoComplete="off"
        required
        value={userName}
        onChange={onInputChange}
      />
      <label htmlFor="name" className="Form__label">
        Name
      </label>
    </div>
  );
};

export default Input;
