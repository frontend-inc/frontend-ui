import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionSimilar } from '../../components'
import { CollectionSimilarProps } from '../../components/cms/collections/CollectionSimilar'
import { SectionProps, HeadingProps } from '../../types'

type CmsSimilarProps = SectionProps & HeadingProps & CollectionSimilarProps

const CmsSimilar: React.FC<CmsSimilarProps> = (props) => {
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
			bgcolor={bgcolor}
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
			<CollectionSimilar {...rest} />
		</Section>
	)
}

export default CmsSimilar
