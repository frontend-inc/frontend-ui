import React, { useState, useEffect } from 'react'
import {
	AuthGuard,
	UserProfile,
	CurrentUserEditModal,
} from '../../../components'
import { useAuth } from 'frontend-js'
import { UserProfileProps } from '../../users/profile/UserProfile'
import { FormFieldType, ButtonType } from '../../../types'
import { buildActions } from '../../../helpers'

export type CurrentUserProps = UserProfileProps & {
	enableEdit?: boolean
	fields?: FormFieldType[]
	buttons?: ButtonType[]
}

const CurrentUser: React.FC<CurrentUserProps> = (props) => {
	const { enableEdit, fields = [], buttons = [] } = props || {}

	const { user, setUser, currentUser, fetchMe } = useAuth()

	const [open, setOpen] = useState(false)

	const handleEdit = () => {
		setOpen(true)
	}

	useEffect(() => {
		if (!currentUser?.id) {
			fetchMe()
		}
	}, [currentUser])

	useEffect(() => {
		if (currentUser) {
			setUser(currentUser)
		}
	}, [currentUser])

	let userActions = buildActions({
		enableEdit,
		handleEdit,
		buttons,
	})

	return (
		<AuthGuard>
			<UserProfile {...props} user={currentUser} buttons={userActions} />
			<CurrentUserEditModal
				open={open}
				handleClose={() => setOpen(false)}
				fields={fields}
			/>
		</AuthGuard>
	)
}

export default CurrentUser
