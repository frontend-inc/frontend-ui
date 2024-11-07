'use client'

import React from 'react'
import { Button } from '../../core'
import { Icon } from '../..'
import { useNavigate } from '../../../hooks'

type ButtonActionProps = {
	icon?: string
	variant?: 'default' | 'secondary' | 'outlined' | 'ghost' | 'link'
  size?: 'sm' | 'default' | 'lg'
	url?: string
	path?: string
	children: React.ReactNode
}

const ButtonAction: React.FC<ButtonActionProps> = (props) => {
	
  const {
		children,
		icon,
		url,
		path,
		variant = 'secondary',
		size = 'default',
		...rest
	} = props


  const onClick = useNavigate({
    url,
    path 
  })

	return (
		<Button
			fullWidth
			size={size}
			startIcon={
				icon && (
					<Icon
						name={icon}
						color={
							variant == 'default'
								? 'text-primary-foreground'
								: 'text-secondary-foreground'
						}
					/>
				)
			}
			onClick={onClick}
			variant={variant}
			{...rest}
		>
			{children}
		</Button>
	)
}

export default ButtonAction
