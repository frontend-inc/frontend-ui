'use client'

import React from 'react'
import { Heading, Stack, Container } from '../../../components'
import { Image } from '@nextui-org/react'
import { SpotlightListProps } from './SpotlightList'

const SpotlightCard: React.FC<SpotlightListProps> = (props) => {
	const {
		image,
		label,
		title,
		subtitle,
		actions,
		enableGradient,
		enableOverlay,
		objectFit = 'cover',
	} = props || {}

	return (
		<div className="pt-16 py-6 h-auto w-full">
			<Container maxWidth="xl">
				<Stack direction="row" className="items-center">
					<Stack direction="row" size="1/2">
						<Stack spacing={6}>
							<Heading
								label={label}
								title={title}
								subtitle={subtitle}
								size="xl"
							/>
							{actions && actions}
						</Stack>
					</Stack>
					<Stack direction="row" size="1/2">
						<Image src={image} alt={title} />
					</Stack>
				</Stack>
			</Container>
		</div>
	)
}

export default SpotlightCard
