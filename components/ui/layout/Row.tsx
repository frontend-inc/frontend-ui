import React from 'react'
import { cn } from '@nextui-org/react'

interface RowProps {
	children: React.ReactNode
	className?: string
}

const Row: React.FC<RowProps> = (props) => {
	const { className, children } = props

	return (
		<div
			className={cn(
				'w-full flex flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0',				
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
