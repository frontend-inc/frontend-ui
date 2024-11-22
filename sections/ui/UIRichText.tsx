'use client'

import React from 'react'
import { Section } from '../../components'
import { RichText } from '../../components'
import { RichTextProps } from '../../components/ui/typography/RichText'
import { SectionProps } from '../../types'

type UIRichTextProps = SectionProps & RichTextProps

const UIRichText: React.FC<UIRichTextProps> = (props) => {
	const {
		bgColor,
		mode,
		py = 'sm',
		px,
		maxWidth = 'lg',
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<RichText {...rest} />
		</Section>
	)
}

export default UIRichText
