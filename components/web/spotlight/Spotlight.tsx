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
	image?: string
	direction?: 'column' | 'row'
	buttons?: ButtonType[]
  enableGradient?: boolean
  enableOverlay?: boolean
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
	const {
		direction = 'column',
		image,
		label,
		title,
    subtitle,
		buttons = [],
    enableGradient,
    enableOverlay,
	} = props || {}

	const Component = {
      column: SpotlightList,
      row: SpotlightCard,
		}[direction] || SpotlightList

    const justifyContent = {
      column: 'justify-center',
      row: 'justify-left'
    }[direction] || 'justify-center'

	return (
		<Component
			label={label}
			title={title}
      subtitle={subtitle}
			actions={buttons?.length > 0 && (
        <ButtonActions 
          size="lg" 
          buttons={buttons} 
          // @ts-ignore 
          justifyContent={justifyContent}
        />
      )}
			image={image}
      enableGradient={enableGradient}
      enableOverlay={enableOverlay}
		/>
	)
}

export default Spotlight
