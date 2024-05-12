import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionTable } from '../../components'
import { CollectionTableProps } from '../../components/cms/collections/CollectionTable'
import { SectionProps, HeadingProps } from '../../types'

type CmsTableProps = SectionProps & HeadingProps & CollectionTableProps

const CmsTable: React.FC<CmsTableProps> = (props) => {
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
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
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
			<CollectionTable {...rest} />
		</Section>
	)
}

export default CmsTable
