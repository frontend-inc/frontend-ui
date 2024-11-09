'use client'

import React from 'react'
import { Cover } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroCover: React.FC<HeroCardProps> = (props) => {
	const { label, image, title, subtitle } = props || {}

	return (
		<Cover
			image={image}
			height={400}
			label={label}
			title={title}
			subtitle={subtitle}
			enableOverlay
		/>
	)
}

export default HeroCover
