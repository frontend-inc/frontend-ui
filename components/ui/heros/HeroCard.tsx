'use client'

import React from 'react'
import { Image } from '../..'
import { Heading, Typography } from '../../../components'
import { HeroProps } from './Hero'

const HeroCard: React.FC<HeroProps> = (props) => {
	
  const {
		label,
		image,
		title,
		subtitle,
		description,
		actions,
		secondaryAction,
		enableOverlay,
		enableGradient,
	} = props || {}

	return (
		<div className="flex flex-col space-y-2 overflow-hidden">
			{secondaryAction}
			<div className="w-full flex justify-center items-center">
				<div className="w-full flex flex-col md:flex-row gap-4 space-y-4 md:space-y-0 md:space-x-4 justify-start items-center md:items-start">
					<div className="w-full md:w-1/2 flex flex-col gap-2">
						<Image
							src={image}
							alt={title}
							label={label}
							aspectRatio={4 / 3}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
						{actions}
					</div>
					<div className="w-full md:w-1/2 max-w-full md:max-w-[500px] flex flex-col space-y-2">
						<Heading
							label={label}
							title={title}
							subtitle={subtitle}
							textAlign="left"
							size="lg"
						/>
						<Typography variant="body1">{description}</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroCard
