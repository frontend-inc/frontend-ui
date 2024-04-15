import React from 'react'
import AvatarVert from './variants/AvatarVert';
import AvatarHoriz from './variants/AvatarHoriz';
import { CardProps } from '../../../types';

const AvatarCard: React.FC<CardProps> = (props) => {
  const { direction } = props;
  switch (direction) {
    case 'column':
      return <AvatarVert {...props} />
    case 'row':
      return <AvatarHoriz {...props} />
    default:
      return <AvatarVert {...props} />
  }
}

export default AvatarCard 

