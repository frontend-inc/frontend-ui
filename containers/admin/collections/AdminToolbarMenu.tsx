import React from 'react'
import { MenuItem } from '@mui/material'
import { MenuButton } from '../../../components'

type AdminToolbarMenuProps = {
	handleSaveView: () => void
}

const AdminToolbarMenu: React.FC<AdminToolbarMenuProps> = (props) => {
	const { handleSaveView } = props

	const onSaveView = () => {
		handleSaveView()
	}

	return (
		<MenuButton>
			<MenuItem onClick={onSaveView}>Save view</MenuItem>
		</MenuButton>
	)
}

export default AdminToolbarMenu
