import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from '@mui/material'

type MyAccountTabsProps = {
	tab?: number
	enableTeams?: boolean
	enableStripe?: boolean
	handleChange?: (ev: any, newValue: number) => void
}

const MyAccountTabs: React.FC<MyAccountTabsProps> = (props) => {
	const { tab, enableTeams, enableStripe, handleChange } = props || {}

	const TABS = [{ label: 'Account', value: 0 }]
	const TEAM_TABS = [
		{ label: 'Teams', value: 1 },
		{ label: 'Members', value: 2 },
	]
	const STRIPE_TABS = [
		{ label: 'Payment', value: 4 },
		{ label: 'Subscription', value: 6 },
	]

	let tabs = TABS
	if (enableTeams) {
		tabs = [...tabs, ...TEAM_TABS]
	}
	if (enableStripe) {
		tabs = [...tabs, ...STRIPE_TABS]
	}

	if (!enableTeams && !enableStripe) return null
	return (
		<Tabs
			value={tab}
			onChange={handleChange}
			color="secondary"
			sx={sx.root}
			variant="fullWidth"
		>
			{tabs?.map((tab, index) => (
				<Tab
					disableRipple
					key={index}
					sx={sx.tab}
					label={tab.label}
					value={tab.value}
				/>
			))}
		</Tabs>
	)
}

export default MyAccountTabs

const sx = {
	root: {
		my: 0,
		borderBottom: '1px solid',
		borderColor: 'divider',
		width: '100%',
		'& .MuiTab-root': {
			minWidth: '60px',
			'&.Mui-selected': {
				color: 'text.primary',
			},
		},
	},
	tab: {},
}
