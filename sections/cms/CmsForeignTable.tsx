import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollectionTable } from '../../components'
import { ForeignCollectionTableProps } from '../../components/cms/collections/ForeignCollectionTable'
import { SectionProps, HeadingProps } from '../../types'

type CmsTableProps = SectionProps & HeadingProps & ForeignCollectionTableProps

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
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ForeignCollectionTable {...rest} />
		</Section>
	)
}

export default CmsTable
