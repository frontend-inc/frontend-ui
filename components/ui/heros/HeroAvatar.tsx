'use client'

import React from 'react'
import { HeroCardProps } from './HeroCard'
import { Typography, AvatarImage } from '../..'

const HeroAvatar: React.FC<HeroCardProps> = (props) => {
	const {
		image,
		title,
		subtitle,
		actions,
		secondaryAction,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<div className="w-full flex flex-row justify-center">
			<div className="container mx-auto w-full max-w-screen-sm flex flex-col space-y-2 justify-center overflow-hidden">
				<div className="w-full flex flex-col space-y-1 justify-center">
					{secondaryAction}
				</div>
				<div className="w-full flex flex-col space-y-6 justify-start items-center">
					<div className="w-full sm:w-[160px] flex flex-col space-y-3">
						<div className="w-full h-full rounded flex justify-center items-center">
							<AvatarImage
								src={image}
								alt={title}
								size={160}
								enableGradient={enableGradient}
								enableOverlay={enableOverlay}
							/>
						</div>
						{actions}
					</div>
					<div className="w-full flex flex-col space-y-1">
						<Typography variant="h3" className="text-center">
							{title}
						</Typography>
						<Typography variant="body1" className="text-center">
							{subtitle}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroAvatar
