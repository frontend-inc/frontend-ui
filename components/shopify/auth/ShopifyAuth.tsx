import React, { useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { IconButton } from '@mui/material'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { useShop } from 'frontend-shopify'
import { Icon } from '../../../components'
import { useRouter } from 'next/router'

type TopNavShopifyAuthButtonProps = {
	handleClick: () => void
	icon: string
}

const TopNavShopifyAuthButton: React.FC<TopNavShopifyAuthButtonProps> = (
	props
) => {
	const { handleClick, icon } = props

	return (
		<IconButton onClick={handleClick}>
			<Icon name={icon} size={24} />
		</IconButton>
	)
}

type SideNavShopifyAuthButtonProps = {
	handleClick: () => void
	icon: string
}

const SideNavShopifyAuthButton: React.FC<SideNavShopifyAuthButtonProps> = (
	props
) => {
	const { handleClick, icon } = props

	return (
		<ListItem disablePadding disableGutters>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Icon name={icon} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography variant="button" color="text.primary">
							Orders
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type ShopifyAuthProps = {
	icon?: string
	variant?: 'topNav' | 'sideNav'
}

const ShopifyAuth: React.FC<ShopifyAuthProps> = (props) => {
	const router = useRouter()
	const { icon = 'ReceiptText', variant = 'topNav' } = props || {}

	const { customerPortalUrl } = useContext(ShopifyContext) as any

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
		if (customerPortalUrl) {
			router.push(customerPortalUrl)
		}
	}

	const fetchCustomerPortalUrl = async () => {
		let shop = await findShop()
		let shopId = getLastPathOfUrl(shop?.id)
		return `https://shopify.com/${shopId}/account`
	}

	if (!customerPortalUrl) return null
	return variant == 'topNav' ? (
		<TopNavShopifyAuthButton icon={icon} handleClick={handleClick} />
	) : (
		<SideNavShopifyAuthButton icon={icon} handleClick={handleClick} />
	)
}

export default ShopifyAuth

const sx = {
	listItemButton: {
		px: 1,
	},
}
