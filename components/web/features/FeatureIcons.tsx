'use client'

import React from 'react'
import FeatureIcon from './FeatureIcon'
import { Placeholder } from '../..'
import { BlurFade } from '../..'

export type FeatureIconsProps = {
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
}

const FeatureIcons: React.FC<FeatureIconsProps> = (props) => {
	const { items = [] } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg p-2">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
						<FeatureIcon
							icon={item?.icon}
							title={item?.title}
							subtitle={item?.subtitle}
						/>
					</BlurFade>
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

export default FeatureIcons