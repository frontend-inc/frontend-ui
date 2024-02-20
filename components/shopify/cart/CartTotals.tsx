import React from 'react'
import { useCart } from 'frontend-shopify'
import { Stack } from '@mui/material'
import { formatCurrency } from 'frontend-shopify'
import { CartText, CartDiscountCode } from '../../../components/shopify'

const CartTotals: React.FC = () => {
	const { cart } = useCart()
  
	const subtotal = Number(cart?.cost?.subtotalAmount?.amount) || 0
	const tax = Number(cart?.totalTaxAmount?.amount) || 0
	const total = Number(cart?.totalAmount?.amount) || 0
	const discounts = Number(cart?.discountAllocation?.amount)|| 0


	if (!cart) return null
	return (
		<Stack spacing={1}>
			<CartText label={'Subtotal'} value={formatCurrency(subtotal)} />
			{cart?.discountCodes?.map((discountCode) => (
        <CartDiscountCode         
					key={discountCode?.id}
					discountCode={discountCode}          
				/>
			))}
			{discounts > 0 && (
				<CartText 
          label={'Discounts'} 
          value={formatCurrency(-discounts)} 
        />
			)}
			<CartText label={'Tax'} value={formatCurrency(tax)} />
			<CartText label={'Total'} value={formatCurrency(total)} />
		</Stack>
	)
}

export default CartTotals
