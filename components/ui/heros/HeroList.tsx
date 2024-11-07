'use client'

import React from 'react'
import { Typography } from '../../core'
import { Image } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroList: React.FC<HeroCardProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		children,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="flex flex-col w-full justify-start items-center space-y-6">
				{secondaryAction}
				<Typography variant="h3">{primary}</Typography>
				<div className="w-full rounded py-10">          
					<Image
            aspectRatio={2.0}
						src={image}
						alt={primary}
						height={400}
						label={label}
						{...slots.image}
					/>
				</div>
				{actions}
				<div className="w-full max-w-[500px] sm:max-w-screen-sm">
          {secondary}
        </div>
				{children}
			</div>
		</div>
	)
}

export default HeroList
