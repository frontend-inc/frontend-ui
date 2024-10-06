import React from 'react'

type StackProps = {
  children: React.ReactNode
  direction?: 'row' | 'column'
  spacing?: 'none' | 'small' | 'medium' | 'large'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  divider?: React.ReactNode
}

const spacingClasses = {
  none: '',
  small: 'space-x-2 space-y-2',
  medium: 'space-x-4 space-y-4',
  large: 'space-x-6 space-y-6',
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

export default function Stack({
  children,
  direction = 'column',
  spacing = 'medium',
  align = 'start',
  justify = 'start',
  divider,
}: StackProps) {
  const stackClasses = [
    'flex',
    direction === 'row' ? 'flex-row' : 'flex-col',
    spacingClasses[spacing],
    alignClasses[align],
    justifyClasses[justify],
  ].join(' ')

  const childrenArray = React.Children.toArray(children)

  return (
    <div className={stackClasses}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {divider && index < childrenArray.length - 1 && (
            <div className={direction === 'row' ? 'mx-2' : 'my-2'}>{divider}</div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export {
  Stack 
}