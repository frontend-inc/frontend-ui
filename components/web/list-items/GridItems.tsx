'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import ListItem from './ListItem'
import { cn } from '@nextui-org/react'

export type GridItemsProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
	cols?: number
	gap?: number
}

const GridItems: React.FC<GridItemsProps> = (props) => {
	const { variant, items = [], cols = 3, gap = 4 } = props || {}

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
		<div className="container mx-auto max-w-screen-lg p-2">
			<div
				className={cn('grid grid-cols-1', gridClasses[cols], gapClasses[gap])}
			>
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
						<ListItem
							icon={item?.icon}
							title={item?.title}
							subtitle={item?.subtitle}
							variant={variant}
						/>
					</BlurFade>
				))}
			</div>
			{items?.length === 0 && (
				<Empty
					icon="ri-stack-fill"
					title="No items"
					description="No items to display."
				/>
			)}
		</div>
	)
}

export default GridItems
