import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material'
import { useAuth } from 'frontend-js'
import { Icon } from '../../../components'
import { AppContext } from '../../../context'

export type SignInButtonProps = {
	showIcon?: boolean
	color?: 'primary' | 'secondary'
	buttonText?: string
}

const SignInButton: React.FC<SignInButtonProps> = (props) => {
	const {
		showIcon = true,
		color = 'primary',
		buttonText = 'Sign In',
	} = props || {}

	const { fetchMe, currentUser } = useAuth()

	const { setAuthOpen } = useContext(AppContext)

	const handleLogin = () => {
		setAuthOpen(true)
	}

	useEffect(() => {
		if (!currentUser) {
			fetchMe()
		}
	}, [currentUser])

	if (currentUser?.id) return null
	return (
		<Button
			sx={sx.button}
			variant="contained"
			color={color}
			onClick={handleLogin}
			startIcon={
				showIcon && (
					<Icon
						color={
							color == 'primary'
								? 'primary.contrastText'
								: 'secondary.contrastText'
						}
						name="User"
						size={20}
					/>
				)
			}
		>
			{buttonText}
		</Button>
	)
}

export default SignInButton

const sx = {
	button: {
		width: '100%',
		justifyContent: 'flex-start',
	},
}
