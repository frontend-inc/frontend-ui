import React from 'react'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children, className } = props

	return (
		<div {...props} className={cn('w-full h-full', className)}>
			{children}
		</div>
	)
}

export default Div
