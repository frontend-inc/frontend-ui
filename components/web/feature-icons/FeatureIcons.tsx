'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import { RemixIcon } from '../..'
import { Typography } from '../../../components'
import { Avatar, AvatarFallback, cn } from 'frontend-shadcn'

type FeatureIconProps = {
	icon?: string
	title?: string
	subtitle?: string
	variant?: 'fill' | 'outline' | 'default'
	direction?: 'column' | 'row'
}

const FeatureIcon: React.FC<FeatureIconProps> = (props) => {
	const { variant, icon, title, subtitle, direction = 'column' } = props || {}
	return (
		<div
			className={cn(
				'flex justify-start py-6 w-full items-start h-full',
        'flex-row items-start space-x-3 min-h-[90px]',
				variant == 'outline' && 'border-2 border-border rounded-lg p-6',
				variant == 'fill' && 'bg-muted rounded-lg p-6'
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
					variant="h6"
				>
					{title}
				</Typography>
				<Typography
					className={cn(
						'text-muted-foreground',
					)}
					variant="body1"
				>
					{subtitle}
				</Typography>
			</div>
		</div>
	)
}

export type FeatureIconsProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
	direction?: 'column' | 'row'
}

const FeatureIcons: React.FC<FeatureIconsProps> = (props) => {
	const { variant, items = [], direction = 'column' } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg p-2">
			<div
				className={'grid grid-cols-1 md:grid-cols-2 gap-6'}
			>
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
						<FeatureIcon
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
					title="No features"
					description="No features to display."
				/>
			)}
		</div>
	)
}

export default FeatureIcons
