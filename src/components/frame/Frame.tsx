import React from 'react';
import { useClassName } from '../../hooks/useClassName/useClassName';
import './Frame.scss';

interface ICardProps {
  header: string;
  content: number;
}

const Frame: React.FC<ICardProps> = ({
  header,
  content,
}) => {
  const cn = useClassName('Frame');

  return (
    <div className={cn()}>
      <div>{header}</div>
      <div>{content}</div>
    </div>
  )
}

export default Frame;
