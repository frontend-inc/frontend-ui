import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Modal, MyAccountForm } from '../../../components'
import {
	TeamList,
	TeamUsersList,
	TeamUserInvite,
	SubscriptionPlans,
	CreditCards,
} from '../../../components'
import MyAccountTabs from './MyAccountTabs'
import { Box } from '@mui/material'

type MyAccountModalProps = {
	enableTeams?: boolean
	enableStripe?: boolean
}

const MyAccountModal: React.FC<MyAccountModalProps> = (props) => {
	const { enableTeams, enableStripe } = props || {}
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

	useEffect(() => {
		if (!currentUser?.id) {
			fetchMe()
		}
	}, [currentUser])

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
			<MyAccountTabs
				tab={currentTab}
				enableTeams={enableTeams}
				enableStripe={enableStripe}
				handleChange={handleTabChange}
			/>
			<Box sx={sx.content}>
				{currentTab == 0 && (
					<MyAccountForm
						loading={delayedLoading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleDeleteAvatar={handleDeleteAvatar}
						handleLogout={handleLogout}
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
				{currentTab == 4 && <CreditCards />}
				{currentTab == 6 && <SubscriptionPlans />}
			</Box>
		</Modal>
	)
}

export default MyAccountModal

const sx = {
	content: {
		p: 2,
	},
}
