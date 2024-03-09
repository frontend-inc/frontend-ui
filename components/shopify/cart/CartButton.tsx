import React, { useContext } from 'react'
import { Badge, IconButton } from '@mui/material'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'

type MobileCartButtonProps = {
	label?: string
	totalQuantity: number
	handleClick: () => void
}

const MobileCartButton: React.FC<MobileCartButtonProps> = (props) => {
	const { label = 'Cart', totalQuantity, handleClick } = props

	return (
		<ListItem
			disablePadding
			disableGutters
			secondaryAction={
				<Badge
					badgeContent={totalQuantity}
					color="primary"
					sx={sx.badge}
				></Badge>
			}
		>
			<ListItemButton onClick={handleClick}>
				<ListItemText
					primary={
						<Typography variant="button" color="text.primary">
							{label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type DesktopCartButtonProps = {
	icon?: string
	totalQuantity: number
	handleClick: () => void
}

const DesktopCartButton: React.FC<DesktopCartButtonProps> = (props) => {
	const { icon = 'ShoppingCart', totalQuantity, handleClick } = props

	return (
		<IconButton onClick={handleClick} sx={sx.root}>
			<Badge color="primary" badgeContent={totalQuantity}>
				<Icon name={icon} size={24} color="text.primary" />
			</Badge>
		</IconButton>
	)
}

type CartButtonProps = {
	icon?: string
	variant?: 'desktop' | 'mobile'
	editing?: boolean
	label?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const {
		variant = 'desktop',
		label = 'Cart',
		icon = 'ShoppingCart',
		editing = false,
	} = props

	const { cart, toggleCart } = useContext(ShopContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		if (!editing) {
			toggleCart()
		}
	}

	return variant == 'desktop' ? (
		<DesktopCartButton
			icon={icon}
			handleClick={handleCartClick}
			totalQuantity={cart?.totalQuantity}
		/>
	) : (
		<MobileCartButton
			label={label}
			handleClick={handleCartClick}
			totalQuantity={cart?.totalQuantity}
		/>
	)
}

export default CartButton

const sx = {
	root: {
		pr: 1.5, // Space for the badge count
	},
	button: {
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	badge: {
		mr: 1,
	},
}
