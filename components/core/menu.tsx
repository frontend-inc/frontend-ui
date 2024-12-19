'use client'

import React from 'react'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

interface MenuProps {
	children: React.ReactNode
	trigger: React.ReactNode
	className?: string
}

interface MenuItemProps {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	className?: string
}

const Menu: React.FC<MenuProps> = ({ children, trigger, className }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent 
        className={cn('p-0 min-w-[200px]', className)}>
				{children}
			</PopoverContent>
		</Popover>
	)
}

const MenuItem: React.FC<MenuItemProps> = ({
	children,
	onClick,
	disabled,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(
        "flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none",
				disabled && 'opacity-50 cursor-not-allowed',
				className
			)}
		>
			{children}
		</button>
	)
}

export { Menu, MenuItem }
