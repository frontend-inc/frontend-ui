'use client'

import React from 'react'
import { ButtonActions } from '../..'
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
		editable,
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
			editable={editable}
			handleChange={handleChange}
			actions={
				buttons?.length > 0 && (
					<ButtonActions
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
