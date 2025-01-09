import React from 'react'
import { cn } from '@nextui-org/react'

interface RowProps {
	size: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full'
	spacing?: number
	children: React.ReactNode
	className?: string
}

const Row: React.FC<RowProps> = (props) => {
	const { size = '1/3', className, children } = props

	const sizeClasses: Record<RowProps['size'], string> = {
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
				'flex flex-col space-y-4 md:space-y-0 items-center w-full',
				sizeClasses[size],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
