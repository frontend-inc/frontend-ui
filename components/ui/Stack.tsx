import React from 'react'
import { cn } from 'frontend-shadcn'

export type StackProps = {
	direction?: 'row' | 'column'
	spacing?: number
	children: React.ReactNode
  size?: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full'
	className?: string
}

const Stack: React.FC<StackProps> = (props) => {
	const { size = 'full', direction = 'column', spacing = 6, className, children } = props
	const isRow = direction === 'row'   

  const spaceXClasses = {
    1: 'space-x-1',
    2: 'space-x-2',
    3: 'space-x-3',
    4: 'space-x-4',
    5: 'space-x-5',
    6: 'space-x-6',
    8: 'space-x-8',
    10: 'space-x-10',    
  }

  const spaceYClasses = {
    1: 'space-y-1',
    2: 'space-y-2',
    3: 'space-y-3',
    4: 'space-y-4',
    5: 'space-y-5',
    6: 'space-y-6',
    8: 'space-y-8',
    10: 'space-y-10',
  }

  // @ts-ignore
  const sizeClasses: Record<StackProps['size'], string> = {
		'1/2': 'md:w-1/2',
		'1/3': 'md:w-1/3',
		'1/4': 'md:w-1/4',
		'2/3': 'md:w-2/3',
		'3/4': 'md:w-3/4',
		'full': 'md:w-full',
	}

	return (
		<div
			className={cn(
				'flex flex-col items-start w-full',
				isRow && `md:flex-row md:space-x-${spacing}`,
        isRow && sizeClasses[size],
        isRow ? spaceXClasses[size] : spaceYClasses[size],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Stack
