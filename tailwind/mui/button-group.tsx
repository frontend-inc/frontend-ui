import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'contained' | 'outlined' | 'text'
	orientation?: 'horizontal' | 'vertical'
	size?: 'small' | 'medium' | 'large'
	color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
	disabled?: boolean
	fullWidth?: boolean
	children: React.ReactNode
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
	variant = 'outlined',
	orientation = 'horizontal',
	size = 'medium',
	color = 'primary',
	disabled = false,
	fullWidth = false,
	children,
	className,
	...props
}) => {
	const variantClasses = {
		contained: 'bg-primary text-primary-foreground hover:bg-primary/90',
		outlined:
			'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
		text: 'hover:bg-accent hover:text-accent-foreground',
	}

	const sizeClasses = {
		small: 'text-xs',
		medium: 'text-sm',
		large: 'text-base',
	}

	const colorClasses = {
		primary: 'focus:ring-primary',
		secondary: 'focus:ring-secondary',
		error: 'focus:ring-destructive',
		warning: 'focus:ring-warning',
		info: 'focus:ring-info',
		success: 'focus:ring-success',
	}

	return (
		<div
			className={cn(
				'inline-flex',
				orientation === 'vertical' ? 'flex-col' : 'flex-row',
				fullWidth && 'w-full',
				className
			)}
			role="group"
			{...props}
		>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						className: cn(
							'flex items-center justify-center',
							variantClasses[variant],
							sizeClasses[size],
							colorClasses[color],
							'focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2',
							disabled && 'opacity-50 cursor-not-allowed',
							orientation === 'horizontal' && [
								index === 0 && 'rounded-l-md',
								index === React.Children.count(children) - 1 && 'rounded-r-md',
								index !== 0 && '-ml-px',
							],
							orientation === 'vertical' && [
								index === 0 && 'rounded-t-md',
								index === React.Children.count(children) - 1 && 'rounded-b-md',
								index !== 0 && '-mt-px',
							],
							child.props.className
						),
						disabled: disabled || child.props.disabled,
					})
				}
				return child
			})}
		</div>
	)
}

export { ButtonGroup }
