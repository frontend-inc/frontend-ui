import React from 'react'
import { useCart } from 'frontend-shopify'
import { Stack } from '@mui/material'
import { formatCurrency } from 'frontend-shopify'
import { ShopifyCartText, ShopifyCartDiscountCode } from '../../../components/shopify'

const ShopifyCartTotals: React.FC = () => {
	const { cart } = useCart()

	const subtotal = Number(cart?.cost?.subtotalAmount?.amount) || 0
	const tax = Number(cart?.totalTaxAmount?.amount) || 0
	const total = Number(cart?.totalAmount?.amount) || 0
	const discounts = Number(cart?.discountAllocation?.amount) || 0

	if (!cart) return null
	return (
		<Stack spacing={1}>
			<ShopifyCartText label={'Subtotal'} value={formatCurrency(subtotal)} />
			{cart?.discountCodes?.map((discountCode) => (
				<ShopifyCartDiscountCode key={discountCode?.id} discountCode={discountCode} />
			))}
			{discounts > 0 && (
				<ShopifyCartText label={'Discounts'} value={formatCurrency(-discounts)} />
			)}
			<ShopifyCartText label={'Tax'} value={formatCurrency(tax)} />
			<ShopifyCartText label={'Total'} value={formatCurrency(total)} />
		</Stack>
	)
}

export default ShopifyCartTotals
