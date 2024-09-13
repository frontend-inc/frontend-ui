import React from 'react'
import {
	Box,
	Typography,
	IconButton,
	List,
	ListItem,
  ListItemIcon,
	ListItemButton,
	ListItemText,	
} from '@mui/material'
import { useApp } from '../../../hooks'
import { Icon, UserAvatar } from '../..'
import { useAuth } from 'frontend-js'

type MyAccountMenuProps = {
	tab?: number
	enableStripe?: boolean
	handleClick: (tab: any) => void
}

const MyAccountMenu: React.FC<MyAccountMenuProps> = (props) => {
	const { handleClick } = props || {}

  const { enableShopify, enableStripe } = useApp()

	const TABS = [
    { label: 'My Account', value: 0 }
  ]
	
  const SUBSCRIPTION_TAB = [
		{ 
      label: 'Subscription', 
      value: 1, 
    },		
	]
  const SHOPIFY_TAB = [
    { 
      label: 'Order History', 
      value: 2, 
    },
  ]


	let tabs = TABS
  if (enableStripe) {
    tabs = [...tabs, ...SUBSCRIPTION_TAB]
  }
  if (enableShopify) {
    tabs = [...tabs, ...SHOPIFY_TAB]
  }

	const { currentUser } = useAuth()

	return (
		<>
			<Box sx={sx.avatar}>
				<UserAvatar user={currentUser} size={96} />
			</Box>
			<List sx={sx.root} disablePadding>
				{tabs?.map((tab, index) => (
					<ListItem
            disablePadding
            disableGutters
						key={index}
						sx={sx.listItem}
						secondaryAction={
              <Box mr={2}>
                <IconButton>                
                  <Icon name={"ChevronRight"} color="text.primary" />
                </IconButton>
              </Box>
						}
					>
						<ListItemButton
							sx={sx.listItemButton}
							onClick={() => handleClick(tab)}
						>
							<ListItemText
								primary={
									<Typography
										sx={sx.menuItem}
										variant="body1"
										color="text.primary"
									>
										{tab?.label}
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default MyAccountMenu

const sx = {
	root: {
		p: 0,
	},
	listItem: {
		p: 0,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	menuItem: {
		pl: 2,
	},
	listItemButton: {
		py: 1,
	},
	avatar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		p: 2,
	},
}
