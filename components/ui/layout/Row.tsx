import React from 'react'
import { cn } from '@nextui-org/react'

interface RowProps {
	children: React.ReactNode
  dense?: boolean
  fullWidth?: boolean
	className?: string
}

const Row: React.FC<RowProps> = (props) => {
	const { className, fullWidth=false, dense=false, children } = props

	return (
		<div
			className={cn(
        'p-4',
				'flex flex-col md:flex-row md:space-x-6 md:space-y-0',        
        fullWidth && 'w-full',
        dense ? 'space-y-2 md:space-x-2' : 'space-y-6 md:space-x-6',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
