'use client'

import React, { useEffect, useState } from 'react'
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
import { useApp } from '../../../hooks'

type AuthModalProps = {
	enableGoogle?: boolean
	handleSuccess?: () => void
}

const AuthModal: React.FC<AuthModalProps> = (props) => {
	const { enableGoogle, handleSuccess } = props

	const { authOpen, setAuthOpen } = useApp()

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

	const [tab, setTab] = useState(1)

	const handleLogin = async () => {
		let resp = await login(user)
		if (resp?.id) {
			setAuthOpen(false)
			if (handleSuccess) {
				handleSuccess()
			}
		}
	}

	const handleSignup = async () => {
		let resp = await signup(user)
		if (resp?.id) {
			setAuthOpen(false)
		}
		if (handleSuccess) {
			handleSuccess()
		}
	}

	const handleGoogleSuccess = async () => {
		setAuthOpen(false)
		if (handleSuccess) {
			handleSuccess()
		}
	}

	const handleSendPin = async () => {
		await sendPin(user)
		setTab(3)
	}

	const handleVerifyPin = async () => {
		let resp = await verifyPin(user?.email, user?.pin)
		if (resp?.id) {
			setTab(5)
		}
	}

	const handleResetPassword = async () => {
		//@ts-ignore
		let resp = await updateMe({
			password: user?.password,
			password_confirmation: user?.password_confirmation,
		})
		if (resp?.id) {
			setAuthOpen(false)
		}
	}

	const handleLoginClick = () => {
		setTab(0)
	}

	const handleSignupClick = () => {
		setTab(1)
	}

	const handleForgotPasswordClick = () => {
		setTab(2)
	}

	const handleResendPinClick = () => {
		setTab(4)
	}

	return (
		<Modal
			maxWidth="md"
			title={
				tab == 0
					? 'Login'
					: tab == 1
					? 'Signup'
					: tab == 2
					? 'Forgot Password'
					: tab == 3
					? 'Verify Pin'
					: tab == 4
					? 'Resend Pin'
					: 'Reset Password'
			}
			description="Register or login"
			open={authOpen}
			handleClose={() => setAuthOpen(false)}
		>
			<div className="flex flex-col space-y-3 pb-2">
				{tab === 0 && (
					<LoginForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleLogin}
						handleSignup={handleSignupClick}
						handleForgotPassword={handleForgotPasswordClick}
						enableGoogle={enableGoogle}
						handleGoogleSuccess={handleGoogleSuccess}
					/>
				)}
				{tab === 1 && (
					<SignupForm
						errors={errors}
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSignup}
						handleLogin={handleLoginClick}
						enableGoogle={enableGoogle}
						handleGoogleSuccess={handleGoogleSuccess}
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
			</div>
		</Modal>
	)
}

export default AuthModal
