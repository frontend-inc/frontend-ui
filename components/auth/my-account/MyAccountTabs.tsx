import React from 'react'
import { ListItemIcon, Tabs, Tab } from '@mui/material'
import { Icon } from 'frontend-ui/components'

type MyAccountTabsProps = {
  tab?: number
  handleChange?: (ev: any, newValue: number) => void
}

const MyAccountTabs: React.FC<MyAccountTabsProps> = (props) => {
	
  const { tab, handleChange } = props || {}

	const TABS = [
    { label: 'Account', value: 0 },
		{ label: 'Teams', value: 1 }        
	]

	return (
		<Tabs
			value={tab}
			onChange={handleChange}
			color="secondary"
			sx={sx.root}
			variant="fullWidth"
		>
			{TABS.map((tab, index) => (
				<Tab
					disableRipple
					key={index}
					sx={sx.tab}
          label={ tab.label }
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
