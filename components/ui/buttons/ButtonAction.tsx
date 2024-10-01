import React from 'react'
import { Button } from '@mui/material'
import { IconLoading, Icon } from '../..'
import { useRouter } from 'next/router'

type ActionProps = {
	icon?: string
	color?: 'primary' | 'secondary'
	size?: 'small' | 'medium' | 'large'
	variant?: 'text' | 'outlined' | 'contained'
	url?: string
	path?: string
	children: React.ReactNode
}

const ButtonAction: React.FC<ActionProps> = (props) => {
	const {
		children,
		icon,
		url,
		path,
		color = 'secondary',
		variant = 'contained',
		size = 'medium',
		...rest
	} = props

	const router = useRouter()

	const handleClick = () => {
		if (url) {
			window.open(url, '_blank')
		} else if(path){      
			router.push(path)
		}
	}

	return (
		<Button
			fullWidth
			sx={sx.button}
			size={size}
			startIcon={
				<>
					{icon && (
						<Icon
							name={icon}
							color={
								color == 'primary'
									? 'primary.contrastText'
									: 'secondary.contrastText'
							}
						/>
					)}
				</>
			}
			onClick={handleClick}
			variant={variant}
			color={color}
			{...rest}
		>
			{children}
		</Button>
	)
}

export default ButtonAction

const sx = {
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
