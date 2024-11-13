'use client'

import React from 'react'
import { Section } from '../../components'
import { Text } from '../../components'
import { TextProps } from '../../components/ui/typography/Text'
import { SectionProps } from '../../types'

type UITextProps = SectionProps & TextProps

const UIText: React.FC<UITextProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={20}
			px={px}
			maxWidth={maxWidth}
		>
			<Text {...rest} />
		</Section>
	)
}

export default UIText
