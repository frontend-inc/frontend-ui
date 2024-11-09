'use client'

import React from 'react'
import {
	HeroAvatar,
	HeroCard,
	HeroCover,
	HeroList,
	ButtonActions,
} from '../../../components'
import { ButtonType } from '../../../types'

export type HeroProps = {
	label?: string
	title?: string
	subtitle?: string
	description?: string
	image?: string
	style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight'
	buttons?: ButtonType[]
	enableGradient?: boolean
	enableOverlay?: boolean
	objectFit?: 'cover' | 'contain'
}

const Hero: React.FC<HeroProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		description,
		image,
		style = 'card',
		buttons = [],
		enableGradient = false,
		enableOverlay = false,
		objectFit = 'cover',
	} = props || {}

	const Component =
		{
			card: HeroCard,
			cover: HeroCover,
			list: HeroList,
			avatar: HeroAvatar,
		}[style] || HeroList

	return (
		<Component
			label={label}
			title={title}
      subtitle={subtitle}
			description={description}			
			image={image}
			secondaryAction={buttons && <ButtonActions buttons={buttons} />}
			enableGradient={enableGradient}
      enableOverlay={enableOverlay}    
      objectFit={objectFit}  
		/>
	)
}

export default Hero
