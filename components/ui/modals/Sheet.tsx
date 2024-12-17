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
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
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
    maxWidth = 'sm',
	} = props

	const { theme } = useTheme()
	const { theme: mode } = useNextTheme()

  const maxWidthClasses = {
    sm: 'sm:w-[360px]',
    md: 'md:max-w-screen-sm',
    lg: 'md:max-w-screen-md',
    xl: 'md:max-w-screen-lg',
  }

	return (
		<ShadcnSheet open={open} onOpenChange={handleClose}>
			<SheetContent
				side={side}
				className={cn(
          'w-full',
					mode,
					theme,					
					disablePadding && 'px-0',
          maxWidthClasses[maxWidth],
					className
				)}
			>
				<SheetHeader className="mt-4">
					<SheetTitle className={cn(disablePadding && 'px-4')}>
						{title}
					</SheetTitle>
				</SheetHeader>
				<div className="h-full max-h-[calc(100vh-150px)] overflow-y-auto">
					{children}
				</div>
				<SheetFooter className={cn('py-4', disablePadding && 'px-4')}>
					{buttons}
				</SheetFooter>
			</SheetContent>
		</ShadcnSheet>
	)
}

export default Sheet
