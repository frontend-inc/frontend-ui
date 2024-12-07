'use client'

import React from 'react'
import { Section, Stack } from '../../components'
import { ButtonActions } from '../../components'
import { ButtonActionsProps } from '../../components/ui/buttons/ButtonActions'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIButtonsProps = SectionProps &
	HeadingProps &
	StackProps &
	ButtonActionsProps

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
		editable,
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
			<ButtonActions {...rest} />
		</Section>
	)
}

export default UIButtons
