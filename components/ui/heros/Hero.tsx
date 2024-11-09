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

  const slots = {
    image: {
      enableGradient,
      enableOverlay,
      objectFit
    }
  }

	return (
		<Component
      label={label}
			primary={title}
			secondary={description}
      tertiary={subtitle}
			image={image}
			secondaryAction={buttons && <ButtonActions buttons={buttons} />}
      slots={slots}
		/>
	)
}

export default Hero
