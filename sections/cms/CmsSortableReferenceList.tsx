import React from 'react'
import { Section, Heading } from '../../components'
import { SortableReferenceCollectionList } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsSortableReferenceListProps = SectionProps &
	HeadingProps &
	CollectionListProps

const CmsSortableReferenceList: React.FC<CmsSortableReferenceListProps> = (
	props
) => {
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
			<SortableReferenceCollectionList {...rest} />
		</Section>
	)
}

export default CmsSortableReferenceList
