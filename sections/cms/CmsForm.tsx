import React from 'react'
import { Section, Heading } from '../../components'
import { DocumentForm } from '../../components'
import { DocumentFormProps } from '../../components/cms/forms/DocumentForm'
import { SectionProps, HeadingProps } from '../../types'

type CmsFormProps = SectionProps & HeadingProps & DocumentFormProps

const CmsForm: React.FC<CmsFormProps> = (props) => {
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
			<DocumentForm {...rest} />
		</Section>
	)
}

export default CmsForm
