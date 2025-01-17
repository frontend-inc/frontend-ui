import React from 'react'
import { cn } from '@nextui-org/react'

export type GridItemProps = {
	span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	className?: string
	children: React.ReactNode
}

const GridItem: React.FC<GridItemProps> = (props) => {
	const { span = 1, className, children } = props

	const spanClasses = {
		1: 'grid md:col-span-1',
		2: 'grid md:col-span-2',
		3: 'grid md:col-span-3',
		4: 'grid md:col-span-4',
		5: 'grid md:col-span-5',
		6: 'grid md:col-span-6',
		7: 'grid md:col-span-7',
		8: 'grid md:col-span-8',
		9: 'grid md:col-span-9',
		10: 'grid md:col-span-10',
		11: 'grid md:col-span-11',
		12: 'grid md:col-span-12',
	}

	return (
		<div className={cn('w-full col-span-full', spanClasses[span], className)}>
			{children}
		</div>
	)
}

export default GridItem
