'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { UserAvatar } from '../..'
import { useAuth } from 'frontend-js'
import { Button } from '../../../components'
import { ChevronRight } from 'lucide-react'

type MyAccountTabsProps = {
	tab?: number
	enableStripe?: boolean
	handleClick: (tab: any) => void
}

const MyAccountTabs: React.FC<MyAccountTabsProps> = ({ handleClick }) => {
	const { enableShopify, enableStripe } = useApp()
	const { currentUser } = useAuth()

	const TABS = [{ label: 'My Account', value: 1 }]

	const SUBSCRIPTION_TAB = [
		{
			label: 'Manage Billing',
			value: 2,
		},
	]
	const SHOPIFY_TAB = [
		{
			label: 'Order History',
			value: 3,
		},
	]

  const LOGOUT_TAB = [
    {
      label: 'Logout',
      value: 4,
    }
  ]

	let tabs = TABS
	if (enableStripe) {
		tabs = [...tabs, ...SUBSCRIPTION_TAB]
	}
	if (enableShopify) {
		tabs = [...tabs, ...SHOPIFY_TAB]
	}

  tabs = [...tabs, ...LOGOUT_TAB]

	return (
		<div className="w-full">
			<div className="flex justify-center items-center p-4">
				<UserAvatar variant="circular" user={currentUser} size={64} />
			</div>
			<ul className="divide-y divide-border">
				{tabs?.map((tab, index) => (
					<li key={index}>
						<Button
							variant="ghost"
							className="w-full justify-between py-3 px-4 text-left"
							onClick={() => handleClick(tab)}
						>
							<span className="text-sm font-medium">{tab?.label}</span>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MyAccountTabs
