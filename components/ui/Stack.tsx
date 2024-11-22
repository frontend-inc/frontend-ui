import React from 'react'
import { cn } from 'frontend-shadcn'

interface StackProps {
	direction?: 'row' | 'column'
	spacing?: number
	children: React.ReactNode
	className?: string
}

const Stack: React.FC<StackProps> = (props) => {
	const { direction = 'column', spacing = 4, className, children } = props
	const isRow = direction === 'row'

	return (
		<div
			className={cn(
				'flex flex-col items-start',
				!isRow && `space-y-${spacing}`,
				isRow && `md:flex-row md:space-x-${spacing}`,
				className
			)}
		>
			{children}
		</div>
	)
}

export default Stack
