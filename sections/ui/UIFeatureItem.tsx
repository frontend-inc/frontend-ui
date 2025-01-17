'use client'

import React from 'react'
import { Section } from '../../components'
import { FeatureItem } from '../../components'
import { FeatureItemProps } from '../../components/web/feature-item/FeatureItem'
import { SectionProps, StackProps } from '../../types'

type UIFeatureItemProps = SectionProps & StackProps & FeatureItemProps

const UIFeatureItem: React.FC<UIFeatureItemProps> = (props) => {
	const {
		variant,
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
			<FeatureItem
				{...rest}
				isEditing={isEditing}
				handleChange={handleChange}
			/>
		</Section>
	)
}

export default UIFeatureItem
