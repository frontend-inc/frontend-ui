'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean
	onClick?: () => void
}

const Backdrop = ({
	children,
	open,
	onClick,
	className,
	...props
}: BackdropProps) => {
	if (!open) return null

	return (
		<div
			onClick={onClick ? onClick : undefined}
			className={cn(
				'fixed inset-0 z-40 flex items-center justify-center transition-opacity duration-300 ease-in-out',
				open ? 'bg-black/60' : 'pointer-events-none',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export { Backdrop }
