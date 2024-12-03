'use client'

import React from 'react'
import { RemixIcon } from '..'
import { Typography } from '..'
import { cn } from 'frontend-shadcn'

type EmptyProps = {
	icon?: string
	title?: string
	description?: string
	buttons?: any
	variant?: 'accent' | 'default' | 'primary' | 'secondary' | 'destructive'
	fill?: boolean
	className?: string
}

const Empty: React.FC<EmptyProps> = (props) => {
	const { icon, fill, title, description, variant, className } = props

	const textClasses = {
		accent: 'text-accent',
		default: 'text-foreground',
		primary: 'text-primary',
		secondary: 'text-secondary',
		destructive: 'text-destructive',
	}

	return (
		<div
			className={cn(
				fill && 'bg-muted/50',
				'rounded-lg py-10 w-full flex flex-col space-y-2 items-center justify-center',
				variant == 'destructive' &&
					'bg-destructive/10 border border-destructive',
				variant == 'accent' && 'bg-accent/10 border border-accent',
				className
			)}
		>
			{icon && (
				<RemixIcon
					name={icon}
					size="xl"
					className={cn(variant && textClasses[variant])}
				/>
			)}
			<div className="flex flex-col space-y-0 w-full items-center justify-center">
				<Typography
					variant="subtitle2"
					className={cn('text-md text-bold text-foreground', variant && textClasses[variant])}
				>
					{title}
				</Typography>
				<Typography
					variant="body1"
					className={cn(
						'text-sm text-foreground/70 font-normal',
						variant && textClasses[variant]
					)}
				>
					{description}
				</Typography>
			</div>
		</div>
	)
}
export default Empty
