'use client'

import React from 'react'
import { Heading, Typography } from '../../../components'
import { Image } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroList: React.FC<HeroCardProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		tertiary,
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
				<Heading
					label={label}
					title={primary}
					description={tertiary}
					textAlign="center"
					size="lg"
				/>
				{secondaryAction && secondaryAction}
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
					<Typography variant="subtitle2" className="text-muted-foreground">
						{secondary}
					</Typography>
				</div>
				{children}
			</div>
		</div>
	)
}

export default HeroList
