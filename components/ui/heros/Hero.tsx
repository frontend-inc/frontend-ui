'use client'

import React from 'react'
import {
	HeroAvatar,
	HeroCard,
	HeroCover,
	HeroList,
	ButtonActions,
} from '../../../components'
import { Typography } from '../../core'
import { ButtonType } from '../../../types'

export type HeroProps = {
	title?: string
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
		title,
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

  const slots = {
    image: {
      enableGradient,
      enableOverlay,
      objectFit
    }
  }

	return (
		<Component
			primary={title}
			secondary={description}
			image={image}
			secondaryAction={buttons && <ButtonActions buttons={buttons} />}
      slots={slots}
		/>
	)
}

export default Hero
