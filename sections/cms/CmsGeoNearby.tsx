import React from 'react'
import { Section, Heading, CollectionGeoNearby } from '../../components'
import { CollectionProps } from '../../components/cms/collections/Collection'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & HeadingProps & CollectionProps

const CmsNearby: React.FC<CmsListProps> = (props) => {
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
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			mode={mode}
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
			<CollectionGeoNearby {...rest} />
		</Section>
	)
}

export default CmsNearby