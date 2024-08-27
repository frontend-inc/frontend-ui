import React from 'react'
import { Section, Heading } from '../../components'
import { ReferenceCollectionGrid } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsReferenceGridProps = SectionProps & HeadingProps & CollectionListProps

const CmsReferenceGrid: React.FC<CmsReferenceGridProps> = (props) => {
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
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ReferenceCollectionGrid {...rest} />
		</Section>
	)
}

export default CmsReferenceGrid
