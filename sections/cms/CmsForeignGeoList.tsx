import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollection } from '../../components'
import { ForeignCollectionListProps } from '../../components/cms/collections/ForeignCollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignGeoListProps = SectionProps &
	HeadingProps &
	ForeignCollectionListProps

const CmsForeignGeoList: React.FC<CmsForeignGeoListProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ForeignCollection 
        {...rest} 
        enableGoogleMaps 
        style="card"
      />
		</Section>
	)
}

export default CmsForeignGeoList
