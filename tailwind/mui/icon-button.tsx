import React from 'react'
import {
	Button as ShadcnButton,
	ButtonProps as ShadcnButtonProps,
} from '../../shadcn/ui/button'
import { cn } from '../../shadcn/lib/utils'

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
	const colorMap: Record<IconButtonColor, ShadcnButtonProps['variant']> = {
		primary: 'default',
		ghost: 'ghost',
		secondary: 'secondary',
	}

	const variantClasses: Record<IconButtonVariant, string> = {
		rounded: 'rounded-md',
		circular: 'rounded-full',
	}

	return (
		<ShadcnButton
			size="icon"
			variant={colorMap[color]}
			className={cn(
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
