import React from 'react'
import { Section, Heading } from '../../components'
import { ReferenceCollectionList } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsReferenceListProps = SectionProps & HeadingProps & CollectionListProps

const CmsReferenceList: React.FC<CmsReferenceListProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			bgColor={bgColor}
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
			<ReferenceCollectionList {...rest} />
		</Section>
	)
}

export default CmsReferenceList
