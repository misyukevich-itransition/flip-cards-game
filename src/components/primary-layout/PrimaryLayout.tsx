import React from 'react';
import './PrimaryLayout.scss';
import Background from '../background/Background';

const PrimaryLayout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      {children}
      <Background />
    </div>
  );
};

export default PrimaryLayout;
