'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { FeatureIcons } from '../../components'
import { FeatureIconsProps } from '../../components/web/features/FeatureIcons'
import { SectionProps, HeadingProps } from '../../types'

type UIFeaturesProps = SectionProps & HeadingProps & FeatureIconsProps

const UIFeatures: React.FC<UIFeaturesProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize='lg',
		bgColor,
		mode,
		py,
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
					textAlign={textAlign}
          size={fontSize}
				/>
				<FeatureIcons {...rest} />
			</div>
		</Section>
	)
}

export default UIFeatures
