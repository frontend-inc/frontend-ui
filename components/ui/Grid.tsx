import React from 'react'
import { cn } from '@nextui-org/react'

export type GridProps = {
	md?: number
	sm?: number
	lg?: number
	xl?: number
	spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10
	className?: string
	children: React.ReactNode
}

const Grid: React.FC<GridProps> = (props) => {
	const {
		sm = 2,
		md = 3,
		lg = 3,
		xl = 3,
		spacing = 2,
		className,
		children,
	} = props

	const gridClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-2',
		3: 'grid-cols-3',
		4: 'grid-cols-4',
	}

	const spacingClasses = {
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
				'grid w-full grid-cols-1',
				smGridClasses,
				mdGridClasses,
				lgGridClasses,
				xlGridClasses,
				spacingClasses[spacing],
				className
			)}
		>
			{children}
		</div>
	)
}

export default Grid
