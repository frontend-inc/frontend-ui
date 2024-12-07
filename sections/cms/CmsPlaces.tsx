'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { PlacesList } from '../../components'
import { PlacesListProps } from '../../components/cms/documents/PlacesList'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsPlacesProps = SectionProps & HeadingProps & PlacesListProps & FormProps

const CmsPlaces: React.FC<CmsPlacesProps> = (props) => {
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
			<PlacesList {...rest} />
		</Section>
	)
}

export default CmsPlaces
