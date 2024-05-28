import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionForm } from '../../components'
import { CollectionFormProps } from '../../components/cms/forms/CollectionForm'
import { SectionProps, HeadingProps } from '../../types'

type CmsFormProps = SectionProps & HeadingProps & CollectionFormProps

const CmsForm: React.FC<CmsFormProps> = (props) => {
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
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
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
			<CollectionForm {...rest} />
		</Section>
	)
}

export default CmsForm
