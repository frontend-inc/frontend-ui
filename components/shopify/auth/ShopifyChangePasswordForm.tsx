'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { TextInput } from '../..'
import { ShopifyCustomerType } from 'frontend-shopify'

type ShopifyForgotPasswordFormProps = {
	errors: any
	customer: ShopifyCustomerType
	handleChange: (e: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const ShopifyForgotPasswordForm: React.FC<ShopifyForgotPasswordFormProps> = (
	props
) => {
	const { errors, customer, handleChange, handleSubmit, handleLogin } = props

	return (
		<div className="flex flex-col space-y-2">
			<TextInput
				errors={errors}
				name="email"
				value={customer?.email}
				placeholder="Enter your email"
				handleChange={handleChange}
			/>
			<Button variant="solid" color="primary" fullWidth onPress={handleSubmit}>
				Send Instructions
			</Button>
			{handleLogin && (
				<Button fullWidth variant="ghost" onPress={handleLogin}>
					Back to Login
				</Button>
			)}
		</div>
	)
}

export default ShopifyForgotPasswordForm
