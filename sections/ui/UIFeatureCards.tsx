'use client'

import React from 'react'
import { Section, Stack, Row, Heading } from '../../components'
import { FeatureCards } from '../../components'
import { FeatureCardsProps } from '../../components/web/featured/FeatureCards'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIFeatureCardsProps = SectionProps & HeadingProps & StackProps & FeatureCardsProps

const UIFeatureCards: React.FC<UIFeatureCardsProps> = (props) => {
	const {
    direction='column',
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
			<Stack direction={direction}>
        <Row size='1/3'>
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            textAlign={direction == 'row' ? 'left' : 'center'}
            size={fontSize}
          />
        </Row>
        <Row size='2/3'>
				  <FeatureCards {...rest} />
        </Row>
			</Stack>
		</Section>
	)
}

export default UIFeatureCards
