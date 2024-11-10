'use client'

import React from 'react'
import { Cover } from '../..'
import { HeroProps } from './Hero'

const HeroCover: React.FC<HeroProps> = (props) => {
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
