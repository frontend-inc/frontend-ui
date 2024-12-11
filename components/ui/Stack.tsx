import React from 'react'
import { cn } from 'frontend-shadcn'

export type StackProps = {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10
	children: React.ReactNode
	size?: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full'
	className?: string
}

const Stack: React.FC<StackProps> = (props) => {
	const {
		size = 'full',
		direction = 'column',
		spacing = 6,
		className,
		children,
	} = props
	const isRow = direction === 'row'

	const spaceXClasses = {
		0: 'md:space-x-0',
		1: 'md:space-x-1',
		2: 'md:space-x-2',
		3: 'md:space-x-3',
		4: 'md:space-x-4',
		5: 'md:space-x-5',
		6: 'md:space-x-6',
		8: 'md:space-x-8',
		10: 'md:space-x-10',
	}

	const spaceYClasses = {
		0: 'space-y-0',
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
		full: 'md:w-full',
	}

	return (
		<div
			className={cn(
				'flex flex-col items-start w-full',
				isRow && `md:flex-row`,
				isRow ? spaceXClasses[spacing] : spaceYClasses[spacing],
				isRow && sizeClasses[size],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Stack
