import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignForm } from '../../components'
import { ForeignFormProps } from '../../components/cms/forms/ForeignForm'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignFormProps = SectionProps & HeadingProps & ForeignFormProps

const CmsForeignForm: React.FC<CmsForeignFormProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth
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
			<ForeignForm {...rest} />
		</Section>
	)
}

export default CmsForeignForm
