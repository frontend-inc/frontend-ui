'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { FeatureIcons } from '../../components'
import { FeatureIconsProps } from '../../components/web/features/FeatureIcons'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIFeaturesProps = SectionProps & HeadingProps & 
  StackProps & FeatureIconsProps

const UIFeatures: React.FC<UIFeaturesProps> = (props) => {
	const {
    direction='column',
    split='1/3',
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize='lg',
    fill,
    border,
		bgColor,
		mode,
		py,
		px,
		maxWidth='lg',
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
			<Stack direction={direction} split={split}>
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={direction == 'row' ? 'left' : 'center'}
          size={fontSize}
				/>
				<FeatureIcons 
          {...rest} 
          direction={direction}
          fill={fill}
          border={border}
        />
			</Stack>
		</Section>
	)
}

export default UIFeatures
