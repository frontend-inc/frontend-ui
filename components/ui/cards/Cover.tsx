import React from 'react'
import CoverVert from './variants/CoverVert';
import CoverHoriz from './variants/CoverHoriz';
import { CardProps } from '../../../types';

const Cover: React.FC<CardProps> = (props) => {
  const { direction } = props;
  switch (direction) {
    case 'column':
      return <CoverVert {...props} />
    case 'row':
      return <CoverHoriz {...props} />
    default:
      return <CoverVert {...props} />
  }
}

export default Cover 

