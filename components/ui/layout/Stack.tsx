import React from 'react'
import { cn } from '@nextui-org/react'

export type StackProps = {
	align?: 'left' | 'center' | 'right'
	dense?: boolean
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
	children: React.ReactNode
	className?: string
}

const Stack: React.FC<StackProps> = (props) => {
	const { align = 'left', direction="column", dense = false, className, children } = props

	const alignClasses = {
		left: 'items-start',
		center: 'items-center',
		right: 'items-end',
	}

  const directionClasses = {
    column: 'flex-col',
    row: 'md:flex-row',
    'row-reverse': 'md:flex-row-reverse',
    'column-reverse': 'flex-col-reverse'
  }

	return (
		<div
			className={cn(
        'p-4',
				'flex flex-col w-full text-center',				
        directionClasses[direction],        
        dense ? 'space-y-2' : 'space-y-6',
        (direction == 'row' || direction == 'row-reverse') && dense && 'md:space-x-2',
        (direction == 'row' || direction == 'row-reverse') && !dense && 'md:space-x-6',
				alignClasses[align],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Stack
