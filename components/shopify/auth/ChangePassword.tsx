import React from 'react'
import { AuthScreen, Loader } from '../..'
import { ChangePasswordForm } from '..'
import { useAuth } from 'frontend-shopify'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

type ChangePasswordProps = {
	title?: string
	subtitle?: string
	loginUrl?: string
}

const ChangePassword: React.FC<ChangePasswordProps> = (props) => {
	const { title, subtitle, loginUrl } = props || {}

	const { showAlertSuccess } = useAlerts()

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
			showAlertSuccess('Password reset instructions sent')
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
    <>
		  <Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ChangePasswordForm
					errors={errors}
					customer={customer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</>
	)
}

export default ChangePassword
