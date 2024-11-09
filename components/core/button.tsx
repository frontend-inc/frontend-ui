'use client'

import React, { forwardRef } from 'react'
import {
	Button as ShadcnButton,
	ButtonProps as ShadcnButtonProps,
} from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'
import { Loader2 } from 'lucide-react'

type ButtonSize = 'sm' | 'default' | 'lg' | 'icon'
type ButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link'

interface ButtonProps extends ShadcnButtonProps {
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
			variant = 'default',
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
			<ShadcnButton
				ref={ref}
				size={size}
				variant={variant}
				className={cn(fullWidth && 'w-full', className)}
				disabled={disabled || loading}
				{...props}
			>
				{loading ? (
					<Loader2 className="h-4 w-4 mr-2 animate-spin" />
				) : (
					startIcon && <span className="mr-2">{startIcon}</span>
				)}
				{children}
				{!loading && endIcon && <span className="ml-2">{endIcon}</span>}
			</ShadcnButton>
		)
	}
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
