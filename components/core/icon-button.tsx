'use client'

import React from 'react'
import {
	Button as ShadcnButton,
	ButtonProps as ShadcnButtonProps,
} from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type IconButtonColor = 'primary' | 'secondary' | 'ghost'
type IconButtonVariant = 'rounded' | 'circular'

interface IconButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {
	color?: IconButtonColor
	variant?: IconButtonVariant
	children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({
	color = 'ghost',
	variant = 'rounded',
	className,
	children,
	...props
}) => {
	
	const variantClasses: Record<IconButtonVariant, string> = {
		rounded: 'rounded-md',
		circular: 'rounded-full',
	}

	return (
		<ShadcnButton
			size="icon"
			variant='ghost'
			className={cn(
				'min-w-[36px] min-h-[36px] bg-transparent hover:bg-secondary/10',
				'flex items-center justify-center',
				variantClasses[variant],
				className
			)}
			{...props}
		>
			{children}
		</ShadcnButton>
	)
}

export { IconButton }
