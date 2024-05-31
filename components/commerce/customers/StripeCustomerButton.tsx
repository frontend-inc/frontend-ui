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
import { Icon } from '../../../components'

type TopNavStripeCustomerButtonButtonProps = {
	handleClick: () => void
	icon: string
}

const TopNavStripeCustomerButtonButton: React.FC<TopNavStripeCustomerButtonButtonProps> = (
	props
) => {
	const { handleClick, icon } = props

	return (
		<IconButton onClick={handleClick}>
			<Icon name={icon} size={24} />
		</IconButton>
	)
}

type SideNavStripeCustomerButtonButtonProps = {
	handleClick: () => void
	icon: string
}

const SideNavStripeCustomerButtonButton: React.FC<SideNavStripeCustomerButtonButtonProps> = (
	props
) => {
	const { handleClick, icon } = props

	return (
		<ListItem 
      disablePadding 
      disableGutters
    >
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

type StripeCustomerButtonProps = {
	icon?: string
	variant?: 'topNav' | 'sideNav'
}

const StripeCustomerButton: React.FC<StripeCustomerButtonProps> = (props) => {
	const { icon = 'CreditCard', variant = 'topNav' } = props || {}

	const { stripeCustomerPortalUrl } = useContext(StripeContext) as any

	const handleClick = async () => {
		if (stripeCustomerPortalUrl) {
			window.open(stripeCustomerPortalUrl, '_blank')
		}
	}

	if (!stripeCustomerPortalUrl) return null
	return variant == 'topNav' ? (
		<TopNavStripeCustomerButtonButton icon={icon} handleClick={handleClick} />
	) : (
		<SideNavStripeCustomerButtonButton icon={icon} handleClick={handleClick} />
	)
}

export default StripeCustomerButton

const sx = {
	listItemButton: {
		px: 1,
	},
}
