'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import ListItem from './ListItem'

export type ListItemsProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
}

const ListItems: React.FC<ListItemsProps> = (props) => {
	const { 
    variant, 
    items = [], 
  } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg p-2">
			<div className={'flex flex-col space-y-4'}>
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

export default ListItems
