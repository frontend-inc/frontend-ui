import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Icon, Placeholder } from '../../../components'
import { Tabs as MuiTabs, Tab as MuiTab } from '@mui/material'
import TabContent from './TabContent'

type TabsProps = {
	orientation?: 'horizontal' | 'vertical'
	items?: {
		icon?: string
		label: string
		title: string
		description: string
		image?: string
	}[]
	editing?: boolean
}

const Tabs: React.FC<TabsProps> = (props) => {
	const [currentTab, setCurrentTab] = useState(0)

	const { items = [], orientation = 'vertical' } = props

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue)
	}

	return (
		<Stack
			spacing={1}
			direction={orientation === 'vertical' ? 'row' : 'column'}
			sx={sx.root}
		>
			<MuiTabs
				centered
				orientation={orientation}
				value={currentTab}
				onChange={handleChange}
				color="primary"
				sx={{
					...sx.tabs,
					...(orientation === 'vertical' && sx.verticalTabs),
				}}
			>
				{items?.map((item, i) => (
					<MuiTab
						label={item.label}
						value={i}
						icon={
							item.icon ? (
								<Box sx={sx.tabIcon}>
									<Icon
										name={item.icon}
										size={20}
										color={currentTab === i ? 'primary.main' : 'text.primary'}
									/>
								</Box>
							) : (
								''
							)
						}
						iconPosition="start"
					/>
				))}
			</MuiTabs>
			{items?.map((item, i) => (
				<TabContent
					key={i}
					active={i == currentTab}
					title={item?.title}
					description={item?.description}
					image={item?.image}
				/>
			))}
			{items?.length === 0 && (
				<Placeholder
					icon="Search"
					title="No content"
					description="Your content will appear here."
				/>
			)}
		</Stack>
	)
}

export default Tabs

const sx = {
	root: {
		width: '100%',
	},
	tabs: {
		color: 'text.primary',
		'& .MuiButtonBase-root': {
			color: 'text.primary',
		},
		'& .MuiButtonBase-root.Mui-selected': {
			color: 'text.primary',
		},
	},
	title: {
		width: '100%',
		textAlign: 'center',
		mb: 2,
	},
	tabIcon: {
		mb: '-4px',
		mr: 1,
	},
	verticalTabs: {
		width: 160,
	},
}
