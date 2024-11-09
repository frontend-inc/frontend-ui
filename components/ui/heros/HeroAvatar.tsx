'use client'

import React from 'react'
import { HeroCardProps } from './HeroCard'
import { Typography, AvatarImage } from '../..'
import { cn } from 'frontend-shadcn'

const HeroAvatar: React.FC<HeroCardProps> = (props) => {
	const {
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
								alt={typeof primary === 'string' ? primary : 'Avatar'}
								size={160}
								{...slots.image}
							/>
						</div>
						{actions}
					</div>
					<div className="w-full flex flex-col space-y-1">
						<Typography variant="h3" className="text-center">
							{primary}
						</Typography>
						<Typography variant="body1" className="text-center">
							{secondary}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroAvatar
