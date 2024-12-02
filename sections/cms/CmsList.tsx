'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { DocumentList } from '../../components'
import { DocumentListProps } from '../../components/cms/documents/DocumentList'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & HeadingProps & DocumentListProps

const CmsList: React.FC<CmsListProps> = (props) => {
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
			<DocumentList {...rest} />
		</Section>
	)
}

export default CmsList
