'use client'

import React, { useState } from 'react'
import { useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Modal, MyAccountForm } from '../../../components'
import {
	StripeCustomerPortal,
	ShopifyCustomerPortal,
} from '../../../components'
import MyAccountTabs from './MyAccountTabs'

type MyAccountModalProps = {
	enableStripe?: boolean
}

const MyAccountModal: React.FC<MyAccountModalProps> = (props) => {
	const { enableStripe } = props || {}
	const { myAccountOpen, setMyAccountOpen } = useApp()

	const { delayedLoading, user, updateMe, handleChange, deleteAvatar, logout } =
		useAuth()

	const [currentTab, setCurrentTab] = useState<number>(0)

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	const handleClick = async (tab: any) => {
		if (tab.url) {
			window.open(tab.url, '_blank')
		} else if (tab.value == 4) {
			setCurrentTab(0)
			setMyAccountOpen(false)
			await logout()
		} else {
			setCurrentTab(tab.value)
		}
	}

	return (
		<Modal
      maxWidth='sm'
			open={myAccountOpen}
			handleClose={
				currentTab != 0 ? () => setCurrentTab(0) : () => setMyAccountOpen(false)
			}
		>
			{currentTab == 0 && (
				<MyAccountTabs
					tab={currentTab}
					enableStripe={enableStripe}
					handleClick={handleClick}
				/>
			)}
			{currentTab == 1 && (
				<MyAccountForm
					loading={delayedLoading}
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleDeleteAvatar={handleDeleteAvatar}
				/>
			)}
			{currentTab == 2 && <StripeCustomerPortal />}
			{currentTab == 3 && <ShopifyCustomerPortal />}
		</Modal>
	)
}

export default MyAccountModal
