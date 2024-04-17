import React from 'react'
import { Section } from '../../components'
import { Profile } from '../../components'
import { ProfileProps } from '../../components/auth/profiles/Profile'
import { SectionProps } from '../../types'

type AuthProfileProps = SectionProps & ProfileProps

const AuthProfile: React.FC<AuthProfileProps> = (props) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Profile {...rest} />
		</Section>
	)
}

export default AuthProfile
