import React from 'react'
import { cn } from '@nextui-org/react'

export type GridItemProps = {
	span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  className?: string
	children: React.ReactNode
}

const GridItem: React.FC<GridItemProps> = (props) => {
	
  const {
		span=1,
		className,
		children,
	} = props

	const spanClasses = {
		1: 'col-span-1',
		2: 'col-span-2',
		3: 'col-span-3',
		4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12'
	}

	return (
		<div
			className={cn(
				'w-full col-span-full',				
				spanClasses[span],
				className
			)}
		>
			{children}
		</div>
	)
}

export default GridItem
