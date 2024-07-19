import React from 'react'
import { Section, Heading } from '../../components'
import { UserForm } from '../../components'
import { UserFormProps } from '../../components/auth/users/UserForm'
import { SectionProps, HeadingProps } from '../../types'

type AuthUserFormProps = SectionProps & HeadingProps & UserFormProps

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
		requireAdmin,
		...rest
	} = props
  
	return (
		<Section
			requireAuth
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
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
			<UserForm 
        {...rest} 
      />
		</Section>
	)
}

export default AuthUserForm
