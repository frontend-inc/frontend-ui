'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { DocumentCarouselList } from '../../components'
import { DocumentCarouselListProps } from '../../components/cms/documents/DocumentCarouselList'
import { SectionProps, HeadingProps } from '../../types'

type CmsCarouselProps = SectionProps & HeadingProps & DocumentCarouselListProps

const CmsCarousel: React.FC<CmsCarouselProps> = (props) => {
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
			<DocumentCarouselList {...rest} />
		</Section>
	)
}

export default CmsCarousel
