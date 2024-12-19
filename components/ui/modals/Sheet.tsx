'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import { useTheme as useNextTheme } from 'next-themes'
import {
	Sheet as ShadcnSheet,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
} from 'frontend-shadcn'

type SheetProps = {
	open: boolean
	loading?: boolean
	title?: string
	side?: 'left' | 'right'
	handleClose: () => void
	buttons?: React.ReactNode
	children: React.ReactNode
	disablePadding?: boolean
	mode?: string
	className?: string
	fullWidth?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Sheet: React.FC<SheetProps> = (props) => {
	const {
		open,
		title,
		side = 'right',
		handleClose,
		children,
		buttons,
		disablePadding = false,
		className,
    maxWidth = 'xs',
	} = props

	const { theme } = useTheme()
	const { theme: mode } = useNextTheme()

  const maxWidthClasses = {
    xs: 'sm:w-[360px]',
    sm: 'md:max-w-screen-sm',
    md: 'md:max-w-screen-md',
    lg: 'md:max-w-screen-lg',
    xl: 'md:max-w-screen-xl',
  }

	return (
		<ShadcnSheet open={open} onOpenChange={handleClose}>
			<SheetContent
				side={side}
				className={cn(
          'w-full py-2',
					mode,
					theme,					
					disablePadding && 'px-0 py-0',
          maxWidthClasses[maxWidth],
					className
				)}
			>
				<SheetHeader className="mt-4">
					<SheetTitle className={cn(disablePadding && 'px-4')}>
						{title}
					</SheetTitle>
				</SheetHeader>
				<div className="h-full max-h-[calc(100vh-120px)] overflow-y-auto py-2">
					{children}
				</div>
				<SheetFooter className={cn('py-4 items-center', disablePadding && 'px-4')}>
					{buttons}
				</SheetFooter>
			</SheetContent>
		</ShadcnSheet>
	)
}

export default Sheet
