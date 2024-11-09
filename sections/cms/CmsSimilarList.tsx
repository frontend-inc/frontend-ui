'use client'

import React from 'react'
import { Section, Heading, SimilarList } from '../../components'
import { SimilarListProps } from '../../components/cms/collections/SimilarList'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & HeadingProps & SimilarListProps

const CmsSimilar: React.FC<CmsListProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
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
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
		>
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<SimilarList {...rest} />
		</Section>
	)
}

export default CmsSimilar
