import React from 'react'
import { Section, Heading } from '../../components'
import { UserList } from '../../components'
import { UserListProps } from '../../components/users/lists/UserList'
import { SectionProps, HeadingProps } from '../../types'

type UsersProps = SectionProps & HeadingProps & UserListProps

const Users: React.FC<UsersProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			
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
			<UserList {...rest} />
		</Section>
	)
}

export default Users
