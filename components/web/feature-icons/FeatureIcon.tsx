'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import { RemixIcon } from '../..'
import { Typography } from '../../../components'
import { cn } from '@nextui-org/react'

type FeatureIconProps = {
	icon?: string
	title?: string
	subtitle?: string
	variant?: 'fill' | 'outline' | 'default'
}

const FeatureIcon: React.FC<FeatureIconProps> = (props) => {
	const { variant, icon, title, subtitle } = props || {}
	return (
		<div
			className={cn(
				'flex justify-start py-6 w-full items-start h-full',
				'flex-row items-start space-x-3 min-h-[90px]',
				variant == 'outline' && 'border-2 border-divider rounded-lg p-6',
				variant == 'fill' && 'bg-content1 rounded-lg p-6'
			)}
		>
			{icon && <RemixIcon name={icon} size="lg" className="text-primary" />}
			<div className={cn('flex flex-col space-y-2')}>
				<Typography variant="h6">{title}</Typography>
				<Typography className={cn('text-foreground/70')} variant="body1">
					{subtitle}
				</Typography>
			</div>
		</div>
	)
}

export default FeatureIcon
