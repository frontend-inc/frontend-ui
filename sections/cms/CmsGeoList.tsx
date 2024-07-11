import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionGeo } from '../../components'
import { CollectionGeoProps } from '../../components/cms/collections/CollectionGeo'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsGeoListProps = SectionProps &
	HeadingProps &
	CollectionGeoProps &
	FormProps

const CmsGeoList: React.FC<CmsGeoListProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		theme,
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
			theme={theme}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<CollectionGeo {...rest} />
		</Section>
	)
}

export default CmsGeoList
