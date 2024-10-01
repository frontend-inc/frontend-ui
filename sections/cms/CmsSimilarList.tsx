import React from 'react'
import { Section, Heading, SimilarList } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & HeadingProps & CollectionListProps

const CmsSimilar: React.FC<CmsListProps> = (props) => {
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
			<SimilarList {...rest} />
		</Section>
	)
}

export default CmsSimilar
