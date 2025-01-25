import React from 'react';
import styles from './GridContainer.module.css'
import { cn } from "@nextui-org/react"

export interface Props {
  children: React.ReactNode;
  columns: number;
}

export function GridContainer({children, columns}: Props) {
  return (
    <ul
      className={cn(
        'grid grid-cols-5 gap-2 p-4 max-w-screen-md',        
    )}
      
    >
      {children}
    </ul>
  );
}