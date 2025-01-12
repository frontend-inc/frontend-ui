import React from 'react'
import { cn } from '@nextui-org/react'

export type StackProps = {
	spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10
	children: React.ReactNode
	className?: string
}

const Stack: React.FC<StackProps> = (props) => {

  const {
		spacing = 6,
		className,
		children,
	} = props

	const spaceClasses = {
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

	return (
		<div
			className={cn(
				'flex flex-col w-full text-center',
				spaceClasses[spacing],
				className,        
			)}
		>
			{children}
		</div>
	)
}

export default Stack
