'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Image } from '../..'
import { Typography } from '../../core'

export type HeroCardProps = {
	label?: string
	image: string
	primary: string 
	secondary?: string
  tertiary?: string 
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	children?: React.ReactNode
	slots?: {
		image?: any
		content?: any
	}
}

const HeroCard: React.FC<HeroCardProps> = (props) => {
	const {
		label,
		image,
		primary,
		secondary,
		actions,
		secondaryAction,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<div className="flex flex-col space-y-2 overflow-hidden">
			{secondaryAction}
			<div className="w-full flex justify-center items-center">
				<div className="w-full flex flex-col md:flex-row gap-4 space-y-4 md:space-y-0 md:space-x-4 justify-start items-center md:items-start">
					<div className="w-full md:w-1/2 flex flex-col gap-2">
						<Image
							src={image}
							alt={typeof primary === 'string' ? primary : 'Hero image'}
							label={label}
							aspectRatio={4 / 3}
							{...slots.image}
						/>
						{actions}
					</div>
					<div className="w-full md:w-1/2 max-w-full md:max-w-[500px] flex flex-col space-y-2">
						<Typography variant="h3">{primary}</Typography>
						<Typography variant="body1">{ secondary }</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroCard
