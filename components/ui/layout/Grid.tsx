import React from 'react'
import { cn } from '@nextui-org/react'

export type GridProps = {
	md?: number
	sm?: number
	lg?: number
	xl?: number
	gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10
	className?: string
	children: React.ReactNode
}

const Grid: React.FC<GridProps> = (props) => {
	const {
		sm = 2,
		md = 3,
		lg = 3,
		xl = 4,
		gap = 4,
		className,
		children,
	} = props

	const gridClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-2',
		3: 'grid-cols-3',
		4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12'
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

	const smGridClasses = `sm:${gridClasses[sm]}`
	const mdGridClasses = `md:${gridClasses[md]}`
	const lgGridClasses = `lg:${gridClasses[lg]}`
	const xlGridClasses = `xl:${gridClasses[xl]}`

	return (
		<div
			className={cn(
				'w-full grid grid-cols-1',
				smGridClasses,
				mdGridClasses,
				lgGridClasses,
				xlGridClasses,
				gapClasses[gap],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Grid
