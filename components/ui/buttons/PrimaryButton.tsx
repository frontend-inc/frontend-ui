import React from 'react'
import { IconLoading, Icon } from '../../../components'
import { Button } from '@mui/material'

export type PrimaryButtonProps = {
	color?: 'primary' | 'secondary'
	loading?: boolean
	children: React.ReactNode
	onClick: (ev: any) => void
	icon?: string
	fullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
	const {
		color = 'primary',
		loading,
		children,
		onClick,
		icon,
		fullWidth,
    size='medium',
    disabled=false
	} = props

	return (
		<Button
			fullWidth={fullWidth}
			color={color}
			variant="contained"
			onClick={onClick}
      size={size}
      disabled={disabled}
			startIcon={
				<>
					{loading && <IconLoading loading={loading} />}
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
		>
			{children}
		</Button>
	)
}

export default PrimaryButton
