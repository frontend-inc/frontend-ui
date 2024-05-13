import React from 'react'
import { Section } from '../../components'
import { AuthFormWizard } from '../../components'
import { FormWizardProps } from '../../components/cms/forms/FormWizard'
import { SectionProps } from '../../types'

type AuthCmsFormProps = SectionProps & FormWizardProps

const AuthCmsFormWizard: React.FC<AuthCmsFormProps> = (props) => {
	const { bgcolor, px, maxWidth, ...rest } = props

	return (
		<Section
			requireAuth
			bgcolor={bgcolor}
			py={0}
			px={px}
			maxWidth={maxWidth}
		>
			<AuthFormWizard {...rest} />
		</Section>
	)
}

export default AuthCmsFormWizard
