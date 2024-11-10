'use client'

import React from 'react'
import { Typography } from '../../core'
import { ButtonActions, SpotlightList, SpotlightCard } from '../..'
import { ButtonType } from '../../../types'

export type SpotlightProps = {
	label?: string
	title?: string
  subtitle?: string
	description?: string
	image?: string
	logos: {
		image: string
		title: string
	}[]
	style?: 'card' | 'list'
	buttons?: ButtonType[]
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
	const {
		style = 'list',
		image,
		label,
		title,
    subtitle,
		description,
		logos = [],
		buttons = [],
	} = props || {}

	const Component =
		{
			list: SpotlightList,
			card: SpotlightCard,
		}[style] || SpotlightList

	return (
		<Component
			label={label}
			title={title}
      subtitle={subtitle}
			description={description}
			actions={buttons?.length > 0 && <ButtonActions buttons={buttons} />}
			logos={logos}
			image={image}
		/>
	)
}

export default Spotlight
