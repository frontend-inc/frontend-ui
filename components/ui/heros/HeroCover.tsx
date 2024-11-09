'use client'

import React from 'react'
import { Cover } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroCover: React.FC<HeroCardProps> = (props) => {
	const { label, image, title, description } = props || {}

	return (
		<Cover
			textVariant="h4"
			image={image}
			height={400}
			label={label}
			title={title}
			description={description}
			enableOverlay
		/>
	)
}

export default HeroCover
