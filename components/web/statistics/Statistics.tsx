'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import { RemixIcon } from '../..'
import { Typography } from '../..'
import { cn } from '@nextui-org/react'

type StatisticProps = {
	icon?: string
	title?: string
	subtitle?: string
	variant?: 'fill' | 'outline' | 'default'
	direction?: 'column' | 'row'
}

const Statistic: React.FC<StatisticProps> = (props) => {
	const { variant, icon, title, subtitle, direction = 'column' } = props || {}
	return (
		<div
			className={cn(
				'flex justify-start py-6 w-full items-start h-full',
        'flex-row items-center space-x-3 min-h-[90px]',
				variant == 'outline' && 'border-2 border-divider rounded-lg p-6',
				variant == 'fill' && 'bg-content1 rounded-lg p-6'
			)}
		>
			{icon && (
        <RemixIcon
          name={icon}
          size="lg"
          className="text-primary"
        />
			)}
			<div
				className={cn(
					'flex flex-col space-y-2',
					direction === 'row' && 'text-left'
				)}
			>
				<Typography
					className='text-foreground/70'
					variant="caption"
				>
					{subtitle}
				</Typography>
        <Typography
					variant="h3"
				>
					{title}
				</Typography>
			</div>
		</div>
	)
}

export type StatisticsProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
	direction?: 'column' | 'row'
}

const Statistics: React.FC<StatisticsProps> = (props) => {
	const { variant, items = [], direction = 'column' } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg p-2">
			<div
				className={'grid grid-cols-2 md:grid-cols-4 gap-6'}
			>
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
						<Statistic
							icon={item?.icon}
							title={item?.title}
							subtitle={item?.subtitle}
							direction={direction}
							variant={variant}
						/>
					</BlurFade>
				))}
			</div>
			{items?.length === 0 && (
				<Empty
					icon="ri-stack-fill"
					title="No statistics"
					description="No statistics to display."
				/>
			)}
		</div>
	)
}

export default Statistics