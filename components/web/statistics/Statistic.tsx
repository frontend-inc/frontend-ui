'use client'

import React from 'react'
import { RemixIcon } from '../..'
import { Typography } from '../..'
import { cn } from '@nextui-org/react'

type StatisticProps = {
	icon?: string
	title?: string
	subtitle?: string
	variant?: 'fill' | 'outline' | 'default'
}

const Statistic: React.FC<StatisticProps> = (props) => {
	const { variant, icon, title, subtitle } = props || {}
	return (
		<div
			className={cn(
				'flex justify-start w-full items-start h-full',
				'flex-row space-x-3 min-h-[90px]',
				variant == 'outline' && 'border-2 border-divider rounded-lg p-4',
				variant == 'fill' && 'bg-content1 rounded-lg p-4'
			)}
		>
			{icon && (
				<div className="w-8 h-8 rounded-lg bg-content1 flex items-center justify-center">
					<RemixIcon name={icon} size="lg" className="text-primary" />
				</div>
			)}
			<div className={cn('flex flex-col space-y-2')}>
				<Typography className="text-foreground/70" variant="caption">
					{subtitle}
				</Typography>
				<Typography variant="h3">{title}</Typography>
			</div>
		</div>
	)
}

export default Statistic
