import React from 'react'
import { Section } from '../../components'
import { FormWizard } from '../../components'
import { FormWizardProps } from '../../components/cms/forms/FormWizard'
import { SectionProps } from '../../types'

type CmsFormWizardProps = SectionProps & FormWizardProps

const CmsFormWizard: React.FC<CmsFormWizardProps> = (props) => {
	const {
		bgcolor,
		py, //special case for padding y
		px,
		maxWidth,
		...rest
	} = props

	return (
		<Section bgcolor={bgcolor} py={0} px={px} maxWidth={maxWidth}>
			<FormWizard py={py} {...rest} />
		</Section>
	)
}

export default CmsFormWizard
