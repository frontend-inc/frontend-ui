'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import {
	Button,
	SheetOverlay,
	Sheet as ShadcnSheet,
	SheetClose,
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
}

const Sheet: React.FC<SheetProps> = ({
	open,
	title,
	side = 'right',
	handleClose,
	children,
	buttons,
	disablePadding = false,
	className,
}) => {
  
	const { mode } = useTheme()
	
	return (
		<ShadcnSheet open={open} onOpenChange={handleClose}>
			<SheetContent
				side={side}
				className={cn(
					mode,
					disablePadding && 'px-0',
					className
				)}
			>
				<SheetHeader className="mt-4">
					<SheetTitle className={cn(disablePadding && 'px-4')}>
						{title}
					</SheetTitle>
				</SheetHeader>
        {children}
        <SheetFooter className={cn(disablePadding && 'px-4')}>
          {buttons}
        </SheetFooter>
			</SheetContent>
		</ShadcnSheet>
	)
}

export default Sheet
