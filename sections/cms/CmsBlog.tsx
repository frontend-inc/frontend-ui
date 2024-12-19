'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { BlogList } from '../../components'
import { BlogListProps } from '../../components/cms/documents/BlogList'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & HeadingProps & BlogListProps

const CmsList: React.FC<CmsListProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth="md",
		requireAuth,
		...rest
	} = props

	return (
		<Section
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
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
			<BlogList {...rest} />
		</Section>
	)
}

export default CmsList
