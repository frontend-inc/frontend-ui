'use client'

import React from 'react'
import { Section, Stack } from '../../components'
import { Buttons } from '../../components'
import { ButtonsProps } from '../../components/ui/buttons/Buttons'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIButtonsProps = SectionProps &
	HeadingProps &
	StackProps &
	ButtonsProps

const UIButtons: React.FC<UIButtonsProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'lg',
		requireAuth,
		isEditing,
		handleChange,
		variant,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			variant={variant}
		>
			<Buttons {...rest} />
		</Section>
	)
}

export default UIButtons
