import React, { useState, useContext, useEffect } from 'react'
import {
	Modal,
	LoginForm,
	SignupForm,
	ForgotPasswordForm,
	ResetPasswordForm,
	VerifyPinForm,
	VerifySendPinForm,
} from '../..'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { Tab, Tabs, Box } from '@mui/material'
import { AppContext } from '../../../context'

type AuthModalProps = {
	disableUsername?: boolean
  enableTeams?: boolean
}

const AuthModal: React.FC<AuthModalProps> = (props) => {
	const { disableUsername = false, enableTeams=false } = props

	const router = useRouter()
	const { app_id: appId } = router.query

	const { authOpen, setAuthOpen } = useContext(AppContext)

	const {
		errors,
		loading,
		user,
		updateMe,
		handleChange,
		login,
		signup,
		verifyPin,
		sendPin,
	} = useAuth()

	const [tab, setTab] = useState(0)

	const handleTabChange = (ev, newValue) => {
		setTab(newValue)
	}

	const handleLogin = async () => {
		let resp = await login({
			...user,
			app_id: appId,
		})
		if (resp?.id) {
			setAuthOpen(false)
			//window.location.reload()
		}
	}

	const handleSignup = async () => {
		let resp = await signup({
			...user,
			app_id: appId,
		})
		if (resp?.id) {
			setAuthOpen(false)
		}
	}

	const handleSendPin = async () => {
		await sendPin({
			...user,
			app_id: appId,
		})
		setTab(3)
	}

	const handleVerifyPin = async () => {
		let resp = await verifyPin(user?.email, user?.pin)
		if (resp?.id) {
			setTab(5)
		}
	}

	const handleResetPassword = async () => {
		let resp = await updateMe({
			password: user?.password,
			password_confirmation: user?.password_confirmation,
		})
		if (resp?.id) {
			setAuthOpen(false)
		}
	}

	const handleSignupClick = () => {
		setTab(1)
	}

	const handleLoginClick = () => {
		setTab(0)
	}

	const handleForgotPasswordClick = () => {
		setTab(2)
	}

	const handleResendPinClick = () => {
		setTab(4)
	}

	useEffect(() => {
		if (authOpen) {
			setTab(0)
		}
	}, [authOpen])

	return (
		<Modal
			open={authOpen}
			handleClose={() => setAuthOpen(false)}
			disablePadding
		>
			<Box sx={sx.tabsContainer}>
				<Tabs value={tab} onChange={handleTabChange}>
					<Tab label="Login" value={0} />
					<Tab label="Register" value={1} />
				</Tabs>
			</Box>
			<Box px={4} sx={sx.content}>
				{tab === 0 && (
					<LoginForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleLogin}
						handleSignup={handleSignupClick}
						handleForgotPassword={handleForgotPasswordClick}
					/>
				)}
				{tab === 1 && (
					<SignupForm
						disableUsername={disableUsername}
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSignup}
						handleLogin={handleLoginClick}
					/>
				)}
				{tab === 2 && (
					<ForgotPasswordForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSendPin}
						handleLogin={handleLoginClick}
					/>
				)}
				{tab === 3 && (
					<VerifyPinForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleVerifyPin}
						handleResendPin={handleResendPinClick}
					/>
				)}
				{tab === 4 && (
					<VerifySendPinForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSendPin}
						handleLogin={handleLoginClick}
					/>
				)}
				{tab == 5 && (
					<ResetPasswordForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleResetPassword}
						handleLogin={handleLoginClick}
					/>
				)}
			</Box>
		</Modal>
	)
}

export default AuthModal

const sx = {
	logo: {
		display: 'flex',
		justifyContent: 'center',
	},
	content: {
		width: '100%',
	},
	tabsContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
}
