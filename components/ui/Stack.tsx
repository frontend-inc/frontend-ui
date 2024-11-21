import React from 'react';
import { cn } from 'frontend-shadcn'

interface StackProps {
  direction: 'row' | 'column';
  split?: '1/2' | '1/3' | '1/4'
  children: [React.ReactNode, React.ReactNode];
}

const Stack: React.FC<StackProps> = (props) => {

  const { direction, split = '1/3', children } = props
  const isRow = direction === 'row'

  const widthFirst =
    split === '1/2' ? 'md:w-1/2' :
    split === '1/4' ? 'md:w-1/4' :
    'md:w-1/3'
  
  const widthSecond =
    split === '1/2' ? 'md:w-1/2' :
    split === '1/4' ? 'md:w-3/4' :
    'md:w-2/3'

  return (
    <div
      className={cn(
        'flex flex-col items-start',
        isRow ? 'md:flex-row md:space-x-3' : 'space-y-3',
      )}
    >
      <div
        className={cn(
          'w-full justify-start',
          isRow && widthFirst
        )}
      >
        {children[0]}
      </div>
      <div
        className={cn(
          'w-full flex justify-start md:justify-center',
          isRow && widthSecond
        )}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default Stack
