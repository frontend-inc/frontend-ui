'use client'

import React from 'react'
import { Alert } from '../..'
import { BlurFade } from '../..'
import { RemixIcon } from '../..'
import { Typography } from '../../../components'
import { Avatar, AvatarFallback, cn } from 'frontend-shadcn'

type FeatureIconProps = {
	icon?: string
	title?: string
	subtitle?: string
	border?: boolean
  fill?: boolean
	direction?: 'column' | 'row'
}

const FeatureIcon: React.FC<FeatureIconProps> = (props) => {
	const { fill, border, icon, title, subtitle, direction = 'column' } = props || {}
	return (
		<div
			className={cn(
				'flex justify-start py-6',
				direction === 'column' ? 
          'flex-col items-center space-y-3' : 
          'flex-row items-start space-x-3',
        border && 'border-2 border-border rounded-lg p-6',
        fill && 'bg-muted rounded-lg p-6'
			)}
		>
			{icon && (
				<Avatar className="h-[48px] w-[48px] rounded-lg">
					<AvatarFallback className="bg-primary rounded-lg">
						<RemixIcon name={icon} size="lg" className="text-primary-foreground" />
					</AvatarFallback>
				</Avatar>
			)}
			<div
				className={cn(
					'flex flex-col justify-center space-y-2',          
					direction === 'row' && 'text-left'
				)}
			>
				<Typography variant="h6" className={direction === 'column' ? 'text-center' : ''}>
					{title}
				</Typography>
				<Typography
					className={cn(
						'text-muted-foreground',
						direction === 'column' ? 'text-center' : 'text-left'
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
  fill?: boolean
  border?: boolean
	items: {
		icon?: any
		title?: string
		subtitle?: string
	}[]
	direction?: 'column' | 'row'
}

const FeatureIcons: React.FC<FeatureIconsProps> = (props) => {
	const { fill, border, items = [], direction = 'column' } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg p-2">
			<div
				className={cn(
					'grid',
					direction === 'column'
						? 'grid-cols-1 md:grid-cols-3 gap-10'
						: 'grid-cols-1 md:grid-cols-2 gap-6'
				)}
			>
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
						<FeatureIcon
              fill={fill}
              border={border}
							icon={item?.icon}
							title={item?.title}
							subtitle={item?.subtitle}
							direction={direction}
						/>
					</BlurFade>
				))}
			</div>
			{items?.length === 0 && (
				<Alert
					icon="ri-stack-fill"
					title="No features"
					description="No features to display."
				/>
			)}
		</div>
	)
}

export default FeatureIcons
