import React from 'react'
import { Section, Heading } from '../../components'
import { GeoList } from '../../components'
import { GeoListProps } from '../../components/cms/collections/GeoList'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsGeoListProps = SectionProps & HeadingProps & GeoListProps & FormProps

const CmsGeoList: React.FC<CmsGeoListProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<GeoList {...rest} />
		</Section>
	)
}

export default CmsGeoList
