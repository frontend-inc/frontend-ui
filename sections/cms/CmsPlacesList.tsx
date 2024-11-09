'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { GeoList } from '../../components'
import { GeoListProps } from '../../components/cms/collections/GeoList'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsPlacesListProps = SectionProps & HeadingProps & GeoListProps & FormProps

const CmsPlacesList: React.FC<CmsPlacesListProps> = (props) => {
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
			<GeoList {...rest} />
		</Section>
	)
}

export default CmsPlacesList
