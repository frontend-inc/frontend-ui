import React, { useContext } from 'react'
import { StripeContext } from '../../../context'
import { IconButton } from '@mui/material'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { Icon } from '../..'

type TopNavStripeCustomerPortalButtonProps = {
	handleClick: () => void
	icon: string
}

const TopNavStripeCustomerPortalButton: React.FC<
	TopNavStripeCustomerPortalButtonProps
> = (props) => {
	const { handleClick, icon } = props

	return (
		<IconButton onClick={handleClick}>
			<Icon name={icon} size={24} />
		</IconButton>
	)
}

type SideNavStripeCustomerPortalButtonProps = {
	handleClick: () => void
	icon: string
}

const SideNavStripeCustomerPortalButton: React.FC<
	SideNavStripeCustomerPortalButtonProps
> = (props) => {
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
							Billing
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type StripeCustomerPortalButtonProps = {
	icon?: string
	variant?: 'topNav' | 'sideNav'
}

const StripeCustomerPortalButton: React.FC<StripeCustomerPortalButtonProps> = (
	props
) => {
	const { icon = 'CreditCard', variant = 'topNav' } = props || {}

	const { stripeCustomerPortalUrl } = useContext(StripeContext) as any

	const handleClick = async () => {
		if (stripeCustomerPortalUrl) {
			window.open(stripeCustomerPortalUrl, '_blank')
		}
	}

	if (!stripeCustomerPortalUrl) return null
	return variant == 'topNav' ? (
		<TopNavStripeCustomerPortalButton icon={icon} handleClick={handleClick} />
	) : (
		<SideNavStripeCustomerPortalButton icon={icon} handleClick={handleClick} />
	)
}

export default StripeCustomerPortalButton

const sx = {
	listItemButton: {
		px: 1,
	},
}
