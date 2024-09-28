import React from 'react'
import { Section, Heading } from '../../components'
import { Text } from '../../components'
import { TextProps } from '../../components/web/text/Text'
import { SectionProps, HeadingProps } from '../../types'

type UITextProps = SectionProps & HeadingProps & TextProps

const UIText: React.FC<UITextProps> = (props) => {
	const { mode, py, px, maxWidth, requireAuth, requirePaid, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			{/* @ts-ignore */}
			<Text {...rest} />
		</Section>
	)
}

export default UIText
