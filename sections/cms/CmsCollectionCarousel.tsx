'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionDocumentsCarousel } from '../../components/cms'
import { CollectionDocumentsCarouselProps } from '../../components/cms/collection-documents/CollectionDocumentsCarousel'
import { SectionProps, HeadingProps } from '../../types'

type CmsCollectionDocumentsCarouselProps = CollectionDocumentsCarouselProps &
	SectionProps &
	HeadingProps

const CmsCollectionDocumentsCarousel: React.FC<
	CmsCollectionDocumentsCarouselProps
> = (props) => {
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
		maxWidth,
		requireAuth,

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
		>
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
				/>
				<CollectionDocumentsCarousel {...rest} />
			</div>
		</Section>
	)
}

export default CmsCollectionDocumentsCarousel
