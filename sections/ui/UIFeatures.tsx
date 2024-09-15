import React from 'react'
import { Section, Heading } from '../../components'
import { Features } from '../../components'
import { FeaturesProps } from '../../components/web/features/Features'
import { SectionProps, HeadingProps } from '../../types'

type UIFeaturesProps = SectionProps & HeadingProps & FeaturesProps

const UIFeatures: React.FC<UIFeaturesProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={'center'}
				textVariant="h3"
			/>
			<Features {...rest} />
		</Section>
	)
}

export default UIFeatures
