'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Image, TouchableOpacity } from '../..'
import { Typography } from '../../core'
import { CardProps } from './Card'

const CoverCard: React.FC<CardProps> = (props) => {
	const {
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,
		image,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<div className="dark">
			<div
				className={cn('relative flex flex-col overflow-hidden w-full rounded')}
			>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						label={label}
						src={image}
						height={340}
						alt={primary}
						aspectRatio={4 / 5}
						className={cn('w-full', slots.image.className)}
						{...slots.image}
					/>
				</TouchableOpacity>
				<div className="absolute bottom-0 left-0 z-10 w-full p-3">
					<div className="flex flex-col justify-between items-end w-full">
						<div className="w-full">
							<Typography variant="subtitle1">{primary}</Typography>
							<Typography variant="body2">{secondary}</Typography>
							<div className="flex flex-row justify-between">
								{actions}
								{secondaryAction}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoverCard
