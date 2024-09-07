import React from 'react'
import {
	Badge,
	ListItem,
	ListItemText,
	ListItemIcon,
	Typography,
} from '@mui/material'
import { formatCurrency } from 'frontend-shopify'
import { Image } from '../../../components'
import { OrderLineItemType } from 'frontend-shopify'

type ShopifyOrderLineItemProps = {
	lineItem: OrderLineItemType
}

const ShopifyOrderLineItem: React.FC<ShopifyOrderLineItemProps> = (props) => {
	const { lineItem } = props
	return (
		<ListItem disableGutters>
			<ListItemIcon sx={sx.thumbnail}>
				{lineItem?.variant?.image?.url && (
					<Badge badgeContent={lineItem.quantity} color="primary">
						<Image height={100} src={lineItem?.variant?.image?.url} />
					</Badge>
				)}
			</ListItemIcon>
			<ListItemText
				primary={lineItem.title}
				secondary={
					<span>
						<Typography variant="body1" color="textPrimary">
							{lineItem?.variant?.title}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{lineItem.quantity} x{' '}
							{formatCurrency(lineItem?.variant?.price?.amount)}
						</Typography>
					</span>
				}
			/>
		</ListItem>
	)
}

export default ShopifyOrderLineItem

const sx = {
	root: {},
	thumbnail: {
		mr: 2,
	},
	avatar: {
		height: 100,
		width: 100,
	},
	lineItem: {},
	loader: {},
	removeIcon: {
		fontSize: 20,
		color: 'text.secondary',
	},
}
