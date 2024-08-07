import React from 'react'
import { Section, Heading } from '../../components'
import { CurrentUserForm } from '../../components'
import { CurrentUserFormProps } from '../../components/auth/users/CurrentUserForm'
import { SectionProps, HeadingProps } from '../../types'

type AuthUserFormProps = SectionProps & HeadingProps & CurrentUserFormProps

const AuthUserForm: React.FC<AuthUserFormProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth
			requireTeam={requireTeam}
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
			<CurrentUserForm {...rest} />
		</Section>
	)
}

export default AuthUserForm
