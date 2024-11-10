'use client'

import React from 'react'
import { Heading, Typography } from '../../../components'
import { Image } from '../..'
import { HeroProps } from './Hero'

const HeroList: React.FC<HeroProps> = (props) => {
	const {
		image,
		label,
		title,
		subtitle,
		description,
		actions,
		secondaryAction,
    enableGradient,
    enableOverlay,    
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="flex flex-col w-full justify-start items-center space-y-6">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign="center"
					size="lg"
				/>
				{secondaryAction && secondaryAction}
				<div className="w-full rounded py-10">
					<Image
						aspectRatio={2.0}
						src={image}
						alt={title}
						height={400}
						label={label}
						enableGradient={enableGradient}
            enableOverlay={enableOverlay}
					/>
				</div>
				{actions}
				<div className="w-full max-w-[500px] sm:max-w-screen-sm">
					<Typography variant="subtitle2" className="text-muted-foreground">
						{description}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default HeroList
