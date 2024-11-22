import React from 'react'
import { cn } from 'frontend-shadcn'

interface RowProps {
	size?: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full'
	spacing?: number
	children: React.ReactNode
	className?: string
}

const Row: React.FC<RowProps> = (props) => {
	const { size = '1/2', className, children } = props

	return (
		<div
			className={cn(
				'flex flex-col items-center',
				size && `w-full md:w-${size}`,
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
