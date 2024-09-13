import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Icon, Modal, MyAccountForm } from '../../../components'
import {
	TeamList,
	TeamUsersList,
	TeamUserInvite,
  StripeCustomerPortal,
  ShopifyCustomerPortal 
} from '../../../components'
import MyAccountTabs from './MyAccountTabs'
import { Box, Button } from '@mui/material'
import { MetafieldType } from '../../../types'

type MyAccountModalProps = {
	enableTeams?: boolean
  enableStripe?: boolean
	metafields?: MetafieldType[]
}

const MyAccountModal: React.FC<MyAccountModalProps> = (props) => {
	const { enableTeams, enableStripe, metafields } = props || {}
	const { myAccountOpen, setMyAccountOpen } = useContext(AppContext)

	const {
		delayedLoading,
		user,
		currentUser,
		updateMe,
		handleChange,
		deleteAvatar,
		logout,
	} = useAuth()

	const [currentTab, setCurrentTab] = useState<number>()

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

	const handleClick = (tab: any) => {
    if(tab.url){
      window.open(tab.url, '_blank')
    }else{
      setCurrentTab(tab.value)
    }		
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
				<MyAccountTabs
					tab={currentTab}
					enableTeams={enableTeams}					
          enableStripe={enableStripe}
					handleClick={handleClick}
				/>
			) : (
				<Box p={1}>
					<Button
						sx={sx.button}
						color="secondary"
						variant="contained"
						startIcon={
							<Icon name="ChevronLeft" color="text.primary" size={24} />
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
        { currentTab == 4 && (
          <StripeCustomerPortal />
        )}        
        { currentTab == 5 && (
          <ShopifyCustomerPortal />
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
