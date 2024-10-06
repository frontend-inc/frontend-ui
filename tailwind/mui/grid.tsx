import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: GridSpacing
  children: React.ReactNode
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
  children: React.ReactNode
}

const gridSpacingClasses: Record<GridSpacing, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
}

const gridSizeClasses: Record<GridSize, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
}

export const GridContainer: React.FC<GridContainerProps> = ({ 
  spacing = 2, 
  children, 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'grid grid-cols-12',
        gridSpacingClasses[spacing],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export const GridItem: React.FC<GridItemProps> = ({ 
  xs, 
  sm, 
  md, 
  lg, 
  xl, 
  children, 
  className, 
  ...props 
}) => {
  const sizeClasses = cn(
    xs && gridSizeClasses[xs],
    sm && `sm:${gridSizeClasses[sm]}`,
    md && `md:${gridSizeClasses[md]}`,
    lg && `lg:${gridSizeClasses[lg]}`,
    xl && `xl:${gridSizeClasses[xl]}`,
  )

  return (
    <div className={cn(sizeClasses, className)} {...props}>
      {children}
    </div>
  )
}