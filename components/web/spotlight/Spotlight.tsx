'use client'

import React from 'react'
import { Buttons } from '../..'
import { ButtonType } from '../../../types'
import SpotlightList from './SpotlightList'
import SpotlightCard from './SpotlightCard'
import { HeadingProps } from '../../../types'

export type SpotlightProps = HeadingProps & {
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
		isEditing,
		handleChange,
	} = props || {}

	const Component =
		{
			column: SpotlightList,
			row: SpotlightCard,
		}[direction] || SpotlightList

	const justifyContent =
		{
			column: 'justify-center',
			row: 'justify-left',
		}[direction] || 'justify-center'

	return (
		<Component
			label={label}
			title={title}
			subtitle={subtitle}
			isEditing={isEditing}
			handleChange={handleChange}
			actions={
				buttons?.length > 0 && (
					<Buttons
						size="lg"
						buttons={buttons}
						// @ts-ignore
						justifyContent={justifyContent}
					/>
				)
			}
			image={image}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
		/>
	)
}

export default Spotlight
