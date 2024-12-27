'use client'

import React, { forwardRef } from 'react'
import { Button as NextButton, ButtonProps as NextButtonProps } from '@nextui-org/react'
 
type ButtonSize = 'sm' | 'default' | 'lg' | 'icon'
type ButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link'

interface ButtonProps extends NextButtonProps {
	size?: ButtonSize
	fullWidth?: boolean
	variant?: ButtonVariant
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	className?: string
	children?: React.ReactNode
	disabled?: boolean
	loading?: boolean
	displayAlertWarning?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			size = 'default',
			variant = 'ghost',
			fullWidth,
			className,
			children,
			startIcon,
			endIcon,
			loading = false,
			disabled,
			displayAlertWarning,
			...props
		},
		ref
	) => {
    
		return (
			<NextButton
				ref={ref}
				size={size}
				variant={variant}
        fullWidth={ fullWidth }
				className={className}
				disabled={disabled || loading}
        isLoading={ loading }
        startContent={ startIcon }
        endContent={ endIcon }
				{...props}
			>        
				{children}
			</NextButton>
		)
	}
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
