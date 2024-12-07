'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { FavoritesList } from '../../components'
import { SectionProps, HeadingProps } from '../../types'
import { DocumentListProps } from '../../components/cms/documents/DocumentList'

type CmsFavoritesProps = SectionProps & HeadingProps & DocumentListProps

const CmsFavorites: React.FC<CmsFavoritesProps> = (props) => {
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<FavoritesList {...rest} />
		</Section>
	)
}

export default CmsFavorites
