'use client'

import React from 'react'
import {
	HeroAvatar,
	HeroCard,
	HeroCover,
	HeroList,
	Buttons,
} from '../..'
import { ButtonType } from '../../../types'

export type HeroProps = {
	variant?: 'circular' | 'square'
	textAlign?: 'left' | 'center'
	image: string
	label?: string
	category?: string
	title: string
	subtitle?: string
	description?: string
	html?: string
	startsAt?: string
	endsAt?: string
	publishedAt?: string
	location?: string
	lat?: number
	lng?: number
	tags?: string[]
	youtubeSrc?: string
	vimeoSrc?: string
	soundcloudSrc?: string
	shopifyProduct?: string
	user?: {
		name: string
		avatar: {
			url: string
		}
	}
	style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight'
	buttons?: ButtonType[]
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	disableImage?: boolean
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
			secondaryAction={
				buttons && (
					<Buttons
						size="lg"
						buttons={buttons}
						justifyContent={
							style == 'card' ? 'justify-start' : 'justify-center'
						}
					/>
				)
			}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
			objectFit={objectFit}
		/>
	)
}

export default Hero
