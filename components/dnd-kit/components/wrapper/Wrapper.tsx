import React from 'react';
import { cn } from '@nextui-org/react'

import styles from './Wrapper.module.css';

interface Props {
  children: React.ReactNode;
  center?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function Wrapper({children, center, style, className}: Props) {
  return (
    <div
      className={cn(
        styles.Wrapper, 
        center && styles.center,
        className
    )}
      style={style}
    >
      {children}
    </div>
  );
}