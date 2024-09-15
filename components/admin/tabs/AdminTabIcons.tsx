import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { Button, Divider, Box, Stack } from '@mui/material'
import AdminTabAuth from './AdminTabAuth'
import AdminTabIcon from './AdminTabIcon'
import Image from 'next/image'
import { useRouter } from 'next/router'

type TabIconsProps = {
	logo?: string
	menuItems: any
	handleClick: any
	secondaryActions?: React.ReactNode
}

const TabIcons: React.FC<TabIconsProps> = (props) => {
	const { logo, menuItems, handleClick, secondaryActions } = props
	const { activeTab } = useContext(AdminContext)

	const router = useRouter()

	const handleHomeClick = () => {
		router.push('/admin')
	}

	return (
		<Box sx={sx.root}>
			<Box width="100%">
				<Box sx={sx.menuItems}>
					{logo && (
						<Button sx={sx.logoButton} onClick={handleHomeClick}>
							<Image src={logo} height={24} width={24} alt="logo" />
						</Button>
					)}
					{Array.isArray(menuItems) &&
						menuItems?.map((item, index) => (
							<Box px={1} key={index}>
								<AdminTabIcon
									selected={activeTab == item.id}
									icon={item.icon}
									handleClick={() => handleClick(item)}
								/>
							</Box>
						))}
				</Box>
			</Box>
			<Stack
				direction="column"
				spacing={1}
				divider={<Divider />}
				sx={sx.bottomTabs}
			>
				{secondaryActions}
				<AdminTabAuth />
			</Stack>
		</Box>
	)
}

export default TabIcons

const sx = {
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRight: '1px solid',
		borderColor: 'divider',
	},
	icon: {
		color: 'primary.contrastText',
	},
	menuItems: {
		my: 1,
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		flexDirection: 'column',
		overflow: 'none',
		gap: '10px',
	},
	logo: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomTabs: {
		mb: 2,
	},
	logoButton: {
		p: 0,
		m: 0,
		height: 24,
		width: 24,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
}
