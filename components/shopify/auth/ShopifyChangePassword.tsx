'use client'

import React from 'react'
import { AuthScreen } from '../..'
import { ShopifyChangePasswordForm } from '..'
import { useAuth } from 'frontend-shopify'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type ShopifyChangePasswordProps = {
	title: string
	subtitle?: string
	loginUrl?: string
}

const ShopifyChangePassword: React.FC<ShopifyChangePasswordProps> = (props) => {
	const { title, subtitle, loginUrl } = props || {}

	const {
		loading,
		errors,
		customer,
		setCustomer,
		handleChange,
		forgotPassword,
	} = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await forgotPassword(customer?.email)
		if (resp?.id) {
			setCustomer({ emal: '' })
			toast('Password reset instructions sent')
		}
	}

	const handleLogin = () => {
		if (loginUrl) {
			router.push(loginUrl)
		}
	}

	return (
		<AuthScreen title={title} subtitle={subtitle}>
			<ShopifyChangePasswordForm
				errors={errors}
				customer={customer}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleLogin={handleLogin}
			/>
		</AuthScreen>
	)
}

export default ShopifyChangePassword
