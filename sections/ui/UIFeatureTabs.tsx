'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { FeatureTabs } from '../../components'
import { FeatureTabsProps } from '../../components/web/feature-tabs/FeatureTabs'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIFeatureTabsProps = SectionProps &
	HeadingProps &
	StackProps &
	FeatureTabsProps

const UIFeatureTabs: React.FC<UIFeatureTabsProps> = (props) => {
	const {
		variant,
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
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
			<Stack spacing={10}>
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={direction == 'row' ? 'left' : 'center'}
					size={fontSize}
					isEditing={isEditing}
					handleChange={handleChange}
				/>
				<FeatureTabs {...rest} direction={direction} />
			</Stack>
		</Section>
	)
}

export default UIFeatureTabs
