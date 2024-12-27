'use client'

import React, { useState, forwardRef } from 'react'
import {
	Button, 
  ButtonProps 
} from '@nextui-org/react'
import { AlertModal } from '..'

type ButtonSize = 'sm' | 'default' | 'lg' | 'icon'
type ButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link'

interface AlertButtonProps extends ButtonProps {
	size?: ButtonSize
	fullWidth?: boolean
	variant?: ButtonVariant
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	className?: string
	children?: React.ReactNode
	disabled?: boolean
	loading?: boolean
	onClick?: () => void
	displayAlertWarning?: boolean
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>(
	(
		{
			onClick,
			size = 'default',
			variant = 'default',
			fullWidth,
			className,
			children,
			startIcon,
			endIcon,
			loading = false,
			disabled,
			...props
		},
		ref
	) => {
		const [open, setOpen] = useState(false)

		const handleConfirm = () => {
			setOpen(false)
			onClick()
		}

		return (
			<>
				<Button
					ref={ref}
          color="danger"
					size={size}
					variant={variant}
          fullWidth={ fullWidth }
					className={className}
					disabled={disabled || loading}
					onPress={() => setOpen(true)}
          isLoading={ loading }
          startContent={ 
            startIcon
          }
          endIcon={ 
            endIcon
          }
					{...props}
				>
					{children}
				</Button>
				<AlertModal
					open={open}
					handleClose={() => setOpen(false)}
					handleConfirm={handleConfirm}
				/>
			</>
		)
	}
)

AlertButton.displayName = 'AlertButton'

export { AlertButton }
export type { AlertButtonProps }
