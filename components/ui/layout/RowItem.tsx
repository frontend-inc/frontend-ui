import React from 'react'
import { cn } from '@nextui-org/react'

interface RowItemProps {
	width: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full'
	spacing?: number
	children: React.ReactNode
	className?: string
}

const RowItem: React.FC<RowItemProps> = (props) => {
	const { width = '1/3', className, children } = props

	const widthClasses: Record<RowItemProps['width'], string> = {
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
				'w-full flex flex-row md:items-center',
				widthClasses[width],
				className
			)}
		>
			{children}
		</div>
	)
}

export default RowItem
