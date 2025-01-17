'use client'

import React from 'react'
import { Typography, RemixIcon } from '../..'

export type FeatureItemsProps = {
	items: {
		icon?: string
		title?: string
		subtitle?: string
	}[]
}

const FeatureItems: React.FC<FeatureItemsProps> = (props) => {
	const { items = [] } = props || {}

	return (
		<ul>
			{items?.map((item, idx) => (
				<li
					key={idx}
					className="flex flex-row w-full items-center space-x-2 h-[60px]"
				>
					{item?.icon && (
						<RemixIcon name={item.icon} className="text-primary" size="xl" />
					)}
					<div className="flex flex-col justify-center space-y-0">
						<Typography variant="subtitle2">{item.title}</Typography>
						<Typography variant="body1" className="text-foreground/70">
							{item.subtitle}
						</Typography>
					</div>
				</li>
			))}
		</ul>
	)
}

export default FeatureItems
