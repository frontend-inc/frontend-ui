import React from 'react'
import { Section, Heading } from '../../components'
import { LikesGrid } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsLikesProps = SectionProps & HeadingProps & CollectionListProps

const CmsLikes: React.FC<CmsLikesProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth
			
			requirePaid={requirePaid}
			mode={mode}
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
			<LikesGrid {...rest} />
		</Section>
	)
}

export default CmsLikes
