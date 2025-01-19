import React from 'react'
import { cn } from '@nextui-org/react'

export type GridProps = {
	cols?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10
	className?: string
	children: React.ReactNode
}

const Grid: React.FC<GridProps> = (props) => {
	const { cols = 12, gap = 4, className, children } = props

	const gridClasses = {
		auto: 'md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]',
		1: 'md:grid-cols-1',
		2: 'md:grid-cols-2',
		3: 'md:grid-cols-3',
		4: 'md:grid-cols-4',
		5: 'md:grid-cols-5',
		6: 'md:grid-cols-6',
		7: 'md:grid-cols-7',
		8: 'md:grid-cols-8',
		9: 'md:grid-cols-9',
		10: 'md:grid-cols-10',
		11: 'md:grid-cols-11',
		12: 'md:grid-cols-12',
	}

	const gapClasses = {
		0: 'gap-0',
		1: 'gap-1',
		2: 'gap-2',
		3: 'gap-3',
		4: 'gap-4',
		5: 'gap-5',
		6: 'gap-6',
		8: 'gap-8',
		10: 'gap-10',
	}

	return (
		<div
			className={cn(
				'w-full grid grid-cols-1',
				gridClasses[cols],
				gapClasses[gap],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Grid
