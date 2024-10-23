'use client'

import React from 'react'
import { Placeholder } from '../../../components'
import FeaturedCard from './FeaturedCard'

export type FeaturedProps = {
	items: {
		icon?: string
		label?: string
		title?: string
		description?: string
		image?: string
		buttonText?: string
		path?: string
		url?: string
	}[]
	enableGradient?: boolean
	enableOverlay?: boolean
	enableBorder?: boolean
}

const Featured: React.FC<FeaturedProps> = (props) => {
	const {
		items = [],
		enableBorder,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="w-full flex flex-col space-y-3">
				{items?.map((item, i) => (
					<FeaturedCard
						key={i}
						label={item?.label}
						title={item?.title}
						description={item?.description}
						image={item?.image}
						buttonText={item?.buttonText}
						href={item?.path}
						flexDirection={i % 2 === 0 ? 'row' : 'row-reverse'}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				))}
			</div>
			{items?.length == 0 && (
				<Placeholder
					icon="LayoutList"
					title="No featured content."
					description="Your featured content will appear here."
				/>
			)}
		</div>
	)
}

export default Featured
