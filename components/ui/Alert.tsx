'use client'

import React from 'react'
import { RemixIcon } from '..'
import {
	Alert as ShadcnAlert,
	AlertTitle,
	AlertDescription,
} from 'frontend-shadcn'
import { cn } from '@nextui-org/react'

type AlertProps = {
	icon?: string
	title?: string
	description?: string
	buttons?: any
	variant?: 'accent' | 'default' | 'primary' | 'secondary' | 'destructive'
	className?: string
}

const Alert: React.FC<AlertProps> = (props) => {
	const { icon, title, description, variant, className } = props

	const textClasses = {
		accent: 'text-accent',
		default: 'text-foreground',
		primary: 'text-primary',
		secondary: 'text-secondary',
		destructive: 'text-destructive',
	}

	return (
		<ShadcnAlert
			className={cn(
				'flex space-x-3',
				variant == 'destructive' && 'bg-destructive/10 border-destructive',
				variant == 'accent' && 'bg-accent/10 border-accent',
				className
			)}
		>
			{icon && (
				<RemixIcon
					name={icon}
					size="lg"
					className={cn(variant && textClasses[variant])}
				/>
			)}
			<div className="flex flex-col">
				<AlertTitle
					className={cn('text-md text-bold', variant && textClasses[variant])}
				>
					{title}
				</AlertTitle>
				<AlertDescription
					className={cn('text-sm font-normal', variant && textClasses[variant])}
				>
					{description}
				</AlertDescription>
			</div>
		</ShadcnAlert>
	)
}
export default Alert
