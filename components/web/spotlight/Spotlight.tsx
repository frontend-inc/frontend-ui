'use client'

import React from 'react'
import { Typography } from '../..'
import { ButtonActions } from '../..'
import { ButtonType } from '../../../types'
import SpotlightList from './SpotlightList'
import SpotlightCard from './SpotlightCard'

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
			actions={buttons?.length > 0 && (
        <ButtonActions 
          size="lg" 
          buttons={buttons} 
          
        />
      )}
			logos={logos}
			image={image}
		/>
	)
}

export default Spotlight
