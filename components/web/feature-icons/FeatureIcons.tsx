'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import { RemixIcon } from '../..'
import { Typography } from '../../../components'
import { cn } from '@nextui-org/react'
import FeatureIcon from './FeatureIcon'

export type FeatureIconsProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
}

const FeatureIcons: React.FC<FeatureIconsProps> = (props) => {
	const { variant, items = [] } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg p-2">
			<div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
						<FeatureIcon
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
					title="No features"
					description="No features to display."
				/>
			)}
		</div>
	)
}

export default FeatureIcons
