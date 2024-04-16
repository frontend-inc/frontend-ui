import React from 'react'
import { Section, Heading } from '../../components'
import { ProfileForm } from '../../components'
import { ProfileFormProps } from '../../components/auth/profiles/ProfileForm'
import { SectionProps, HeadingProps } from '../../types'

type AuthProfileFormProps = SectionProps & 
  HeadingProps & 
  ProfileFormProps

const AuthProfileForm: React.FC<AuthProfileFormProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		...rest
	} = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ProfileForm {...rest} />
		</Section>
	)
}

export default AuthProfileForm
