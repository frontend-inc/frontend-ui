import React from 'react'
import { IconButton } from '@mui/material'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { useShop } from 'frontend-shopify'
import { Icon } from '../../../components'
import { useRouter } from 'next/router'

type TopNavShopifyAuthButtonProps = {
	handleClick: () => void
}

const TopNavShopifyAuthButton: React.FC<TopNavShopifyAuthButtonProps> = (
	props
) => {
	const { handleClick } = props

	return (
		<IconButton onClick={handleClick}>
			<Icon name="ShoppingBag" size={24} />
		</IconButton>
	)
}

type SideNavShopifyAuthButtonProps = {
	handleClick: () => void
}

const SideNavShopifyAuthButton: React.FC<SideNavShopifyAuthButtonProps> = (
	props
) => {
	const { handleClick } = props

	return (
		<ListItem disablePadding disableGutters>
			<ListItemButton onClick={handleClick}>
				<ListItemText
					primary={
						<Typography variant="button" color="text.primary">
							My Orders
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type ShopifyAuthProps = {
	customerUrl?: string
	variant?: 'topNav' | 'sideNav'
}

const ShopifyAuth: React.FC<ShopifyAuthProps> = (props) => {
	const router = useRouter()
	const { variant = 'topNav', customerUrl } = props || {}

	const { findShop } = useShop()

	const getLastPathOfUrl = (urlString) => {
		const url = new URL(urlString)
		const pathname = url.pathname
		const pathSegments = pathname
			.split('/')
			.filter((segment) => segment.length > 0)
		return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : ''
	}

	const handleClick = async () => {
		if (customerUrl) {
			router.push(customerUrl)
		} else {
			let shop = await findShop()
			let shopId = getLastPathOfUrl(shop?.id)
			router.push(`https://shopify.com/${shopId}/account`)
		}
	}

	return variant == 'topNav' ? (
		<TopNavShopifyAuthButton handleClick={handleClick} />
	) : (
		<SideNavShopifyAuthButton handleClick={handleClick} />
	)
}

export default ShopifyAuth
