'use client'

import React from 'react'
import Feature from './Feature'
import { Placeholder } from '../../../components'

export type FeaturesProps = {
	items: {
		icon?: any
		title?: string
		description?: string
	}[]
}

const Features: React.FC<FeaturesProps> = (props) => {
	const { items = [] } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{items?.map((item, i) => (
					<Feature
						key={i}
						icon={item?.icon}
						title={item?.title}
						description={item?.description}
					/>
				))}
			</div>
			{items?.length == 0 && (
				<Placeholder
					icon="Zap"
					title="No features"
					description="No features to display."
				/>
			)}
		</div>
	)
}

export default Features
