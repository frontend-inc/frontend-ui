import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Icon, Modal, MyAccountForm } from '../../../components'
import {
	TeamList,
	TeamUsersList,
	TeamUserInvite,
} from '../../../components'
import MyAccountMenu from './MyAccountMenu'
import { Box, Button } from '@mui/material'
import { MetafieldType } from '../../../types'

type MyAccountModalProps = {
	enableTeams?: boolean
	metafields?: MetafieldType[]
}

const MyAccountModal: React.FC<MyAccountModalProps> = (props) => {
	const { enableTeams, metafields } = props || {}
	const { myAccountOpen, setMyAccountOpen } = useContext(AppContext)

	const {
		delayedLoading,
		user,
		setUser,
		fetchMe,
		currentUser,
		updateMe,
		handleChange,
		deleteAvatar,
		logout,
	} = useAuth()

	const [currentTab, setCurrentTab] = useState(0)

	const handleLogout = async () => {
		await logout()
		setMyAccountOpen(false)
	}

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	const handleTabChange = (ev: any, newValue: number) => {
		setCurrentTab(newValue)
	}

	return (
		<Modal
			disablePadding
			open={myAccountOpen}
			handleClose={() => setMyAccountOpen(false)}
			title={
				currentUser?.id
					? `${currentUser?.first_name} ${currentUser?.last_name}`
					: 'My Account'
			}
		>
			{currentTab == null ? (
				<MyAccountMenu
					tab={currentTab}
					enableTeams={enableTeams}					
					handleChange={handleTabChange}
				/>
			) : (
				<Box px={1}>
					<Button
						sx={sx.button}
						color="secondary"
						variant="contained"
						startIcon={
							<Icon name="ChevronLeft" color="text.primary" size={32} />
						}
						onClick={() => setCurrentTab(null)}
					>
						Back
					</Button>
				</Box>
			)}
			<Box sx={sx.content}>
				{currentTab == 0 && (
					<MyAccountForm
						loading={delayedLoading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleDeleteAvatar={handleDeleteAvatar}
						handleLogout={handleLogout}
						metafields={metafields}
					/>
				)}
				{currentTab == 1 && <TeamList />}
				{currentTab == 2 && (
					<TeamUsersList handleAddUser={() => setCurrentTab(3)} />
				)}
				{currentTab == 3 && (
					<TeamUserInvite
						handleSuccess={() => setCurrentTab(2)}
						handleCancel={() => setCurrentTab(2)}
					/>
				)}
			</Box>
		</Modal>
	)
}

export default MyAccountModal

const sx = {
	content: {
		p: 2,
	},
	button: {
		color: 'text.primary',
		bgcolor: 'background.paper',
		boxShadow: 0,
		'&:hover': {
			color: 'text.primary',
			boxShadow: 0,
			bgcolor: 'background.paper',
		},
	},
}
