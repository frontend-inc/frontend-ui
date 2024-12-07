'use client'

import React from 'react'
import { Section } from '../../components'
import { Heading } from '../../components'
import { SectionProps, HeadingProps } from '../../types'

type UITextProps = SectionProps & HeadingProps

const UIHeading: React.FC<UITextProps> = (props) => {
	const {
		variant,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'sm',
		requireAuth,
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
			<Heading {...rest} />
		</Section>
	)
}

export default UIHeading
