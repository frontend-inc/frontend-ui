import React, { useContext } from 'react'
import { Badge, IconButton } from '@mui/material'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'

type SideNavCartButtonProps = {
	label?: string
	icon: string
	totalQuantity: number
	handleClick: () => void
}

const SideNavCartButton: React.FC<SideNavCartButtonProps> = (props) => {
	const { label = 'Cart', icon, totalQuantity, handleClick } = props

	return (
		<ListItem
			disablePadding
			disableGutters
			secondaryAction={
				<Badge badgeContent={totalQuantity} color="primary" sx={sx.badge} />
			}
		>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Icon name={icon} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography variant="body1" color="text.primary">
							{label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type TopNavCartButtonProps = {
	icon: string
	totalQuantity: number
	handleClick: () => void
}

const TopNavCartButton: React.FC<TopNavCartButtonProps> = (props) => {
	const { icon, totalQuantity, handleClick } = props

	return (
		<IconButton onClick={handleClick} sx={sx.root}>
			<Badge color="primary" badgeContent={totalQuantity}>
				<Icon name={icon} size={24} color="text.primary" />
			</Badge>
		</IconButton>
	)
}

type ShopifyCartButtonProps = {
	icon?: string
	variant?: 'topNav' | 'sideNav'
	editing?: boolean
	label?: string
}

const ShopifyCartButton: React.FC<ShopifyCartButtonProps> = (props) => {
	const { variant = 'topNav', label = 'Cart', icon = 'ShoppingCart' } = props

	const { cart, toggleCart } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		toggleCart()
	}

	return variant == 'topNav' ? (
		<TopNavCartButton
			icon={icon}
			handleClick={handleCartClick}
			totalQuantity={cart?.totalQuantity}
		/>
	) : (
		<SideNavCartButton
			label={label}
			icon={icon}
			handleClick={handleCartClick}
			totalQuantity={cart?.totalQuantity}
		/>
	)
}

export default ShopifyCartButton

const sx = {
	root: {
		pr: 1.5, // Space for the badge count
	},
	button: {
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	listItemButton: {
		px: 1,
	},
	badge: {
		mr: 1,
	},
}
