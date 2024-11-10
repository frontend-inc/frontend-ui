'use client'

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
		subtitle,
		textAlign,
		bgColor,
		mode,
		py=12,
		px,
		maxWidth,
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
			<div className="flex flex-col space-y-6 w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={'center'}
				/>
				<Features {...rest} />
			</div>
		</Section>
	)
}

export default UIFeatures
