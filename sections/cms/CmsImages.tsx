'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ImageList } from '../../components'
import { ImageListProps } from '../../components/cms/documents/ImageList'
import { SectionProps, HeadingProps } from '../../types'

type CmsImagesProps = SectionProps & HeadingProps & ImageListProps

const CmsImages: React.FC<CmsImagesProps> = (props) => {
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
			<ImageList {...rest} />
		</Section>
	)
}

export default CmsImages
