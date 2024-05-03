import React from 'react'
import { Section } from '../../components'
import { ProfileFormWizard } from '../../components'
import { ProfileFormWizardProps } from '../../components/auth/profiles/ProfileFormWizard'
import { SectionProps } from '../../types'

type AuthProfileFormWizardProps = SectionProps & ProfileFormWizardProps

const AuthProfileFormWizard: React.FC<AuthProfileFormWizardProps> = (props) => {
	const {
		bgcolor,
		py, //special case for padding y
		px,
		maxWidth,
		...rest
	} = props

	return (
		<Section bgcolor={bgcolor} py={0} px={px} maxWidth={maxWidth}>
			<ProfileFormWizard py={py} {...rest} />
		</Section>
	)
}

export default AuthProfileFormWizard
