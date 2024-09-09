import React, { useState, useEffect } from 'react'
import { Stack, Box, Button, List, Typography } from '@mui/material'
import {
	ShopifyAddressItem,
	ShopifyOrderLineItem,
} from '../../../components/shopify'
import { formatCurrency } from 'frontend-shopify'
import { ShopifyOrderType, OrderLineItemType } from 'frontend-shopify'
import { ExternalLink } from 'lucide-react'
import { useRouter } from 'next/router'

type ShopifyOrderDetailsProps = {
	styles?: object
	order: ShopifyOrderType
	supportUrl?: string
}

const ShopifyOrderDetails: React.FC<ShopifyOrderDetailsProps> = (props) => {
	const router = useRouter()
	const { order, supportUrl } = props

	const [lineItems, setListItems] = useState<OrderLineItemType[]>()

	const handleOrderStatusClick = () => {
		window.open(order?.statusUrl, '_blank')
	}

	const handleSupportClick = () => {
		if (supportUrl) {
			router.push(supportUrl)
		}
	}

	useEffect(() => {
		if (order) {
			//@ts-ignore
			setListItems(order?.lineItems?.edges.map((e) => e.node))
		}
	}, [order])

	const { shippingAddress } = order || {}
	return (
		<Stack spacing={1}>
			<Typography gutterBottom variant="body1">
				Order details
			</Typography>
			<List>
				{lineItems?.map((lineItem, i) => (
					<ShopifyOrderLineItem key={i} lineItem={lineItem} />
				))}
			</List>
			<Box sx={sx.lineItem}>
				<Typography variant="body1">Shipping</Typography>
				<Typography variant="body1">
					{formatCurrency(order?.totalShippingPrice?.amount, 2)}
				</Typography>
			</Box>
			<Box sx={sx.lineItem}>
				<Typography variant="body1">Total</Typography>
				<Typography variant="body1">
					{formatCurrency(order?.totalPrice?.amount, 2)}
				</Typography>
			</Box>
			{shippingAddress && (
				<>
					<Typography gutterBottom variant="body1">
						Shipping Details
					</Typography>
					<List>
						<ShopifyAddressItem
							disableActions
							//@ts-ignore
							address={shippingAddress}
						/>
					</List>
				</>
			)}
			<Button
				fullWidth
				variant="contained"
				endIcon={<ExternalLink />}
				onClick={handleOrderStatusClick}
			>
				Order status
			</Button>
			{supportUrl && (
				<Button fullWidth variant="outlined" onClick={handleSupportClick}>
					Customer support
				</Button>
			)}
		</Stack>
	)
}

export default ShopifyOrderDetails

const sx = {
	root: {},
	lineItem: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	shippingDetails: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
}
