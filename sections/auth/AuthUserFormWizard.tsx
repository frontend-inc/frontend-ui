import React from 'react'
import { Section } from '../../components'
import { CurrentUserFormWizard } from '../../components'
import { CurrentUserFormWizardProps } from '../../components/auth/users/CurrentUserFormWizard'
import { SectionProps } from '../../types'

type AuthUserFormWizardProps = SectionProps & CurrentUserFormWizardProps

const AuthUserFormWizard: React.FC<AuthUserFormWizardProps> = (props) => {
	const { bgColor, py, px, maxWidth, requirePaid, ...rest } = props

	return (
		<Section
			requireAuth
			requirePaid={requirePaid}
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CurrentUserFormWizard {...rest} />
		</Section>
	)
}

export default AuthUserFormWizard
