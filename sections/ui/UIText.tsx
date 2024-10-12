import React from 'react'
import { Section } from '../../components'
import { Typography } from '../../tailwind'
import { TextProps } from '../../components/ui/typography/Text'
import { SectionProps, HeadingProps } from '../../types'

type UITextProps = SectionProps & HeadingProps & TextProps

const UIText: React.FC<UITextProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, requirePaid, ...rest } =
		props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Typography variant="body1" {...rest} />
		</Section>
	)
}

export default UIText
