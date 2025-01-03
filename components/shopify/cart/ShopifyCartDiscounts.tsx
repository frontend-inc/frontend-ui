'use client'

import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { TextInput } from '../../../components'
import { Button } from '@nextui-org/react'

const ShopifyCartDiscountCodeInput: React.FC = () => {
	const [discountCode = '', setDiscountCode] = useState<string | null>(null)

	const { loading, cartApplyDiscountCode } = useCart()

	const handleSubmit = async () => {
		if (discountCode && discountCode != '') {
			await cartApplyDiscountCode(discountCode)
			setDiscountCode('')
		}
	}

	const handleChange = (e) => setDiscountCode(e.target.value)

	return (
		<div className="px-1 flex flex-row justify-center items center space-x-1">
			<TextInput
				name="discountCode"
				value={discountCode}
				handleChange={handleChange}
				placeholder="Enter discount code"
			/>
			<Button onPress={handleSubmit} variant="ghost" isLoading={loading}>
				Apply
			</Button>
		</div>
	)
}

export default ShopifyCartDiscountCodeInput
