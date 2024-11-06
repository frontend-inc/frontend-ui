'use client'

import React from 'react'
import { Typography } from '../../core'
import { Label, Image, Logos } from '../..'
import { SpotlightListProps } from './SpotlightList'

const SpotlightCard: React.FC<SpotlightListProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
		logos = [],
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<div className={'pt-16 py-6 h-auto w-full'}>
			<div className="container mx-auto max-w-screen-xl">
				<div className="flex flex-col sm:flex-row md:space-x-4 space-y-4">
					<div className="flex flex-col space-y-6 sm:min-h-[400px] md:items-start xs:items-center justify-center md:max-w-[600px] xs:max-w-full md:w-1/2 xs:w-full">
						{label && (
							<div>
								<Label label={label} />
							</div>
						)}
						<Typography variant="h2" className="md:text-left xs:text-center">
							{primary}
						</Typography>
						{secondary && secondary}
						{actions && actions}
						{logos?.length > 0 && <Logos logos={logos} />}
					</div>
					<div className="md:w-1/2 w-full p-2 flex flex-col justify-center">
						<Image
							src={image}
							alt={typeof primary === 'string' ? primary : 'Spotlight image'}
							height={400}
							aspectRatio={3 / 2}
							objectFit="cover"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpotlightCard
