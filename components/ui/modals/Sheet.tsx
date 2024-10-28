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
import { X } from 'lucide-react'

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
	
  const animationClasses = {
    left: 'slide-in-from-left',
    right: 'slide-in-from-right',    
  }

	return (
		<ShadcnSheet open={open} onOpenChange={handleClose}>
			<SheetOverlay className="bg-black/50 top-0" />
			<SheetContent
				side={side}
				className={cn(
					mode,
					disablePadding && 'px-0',
					'flex flex-col w-screen sm:max-w-[300px] sm:w-full',
          'animate-in duration-300',
          animationClasses[side],
					className
				)}
			>
				<SheetClose asChild />
				<SheetHeader className="mt-4">
					<SheetTitle className={cn(disablePadding && 'px-4')}>
						{title}
					</SheetTitle>
				</SheetHeader>
				<div className={'flex-grow overflow-y-auto'}>
          {children}
        </div>
				{buttons && (
					<SheetFooter className={cn(disablePadding && 'px-4')}>
						{buttons}
					</SheetFooter>
				)}
			</SheetContent>
		</ShadcnSheet>
	)
}

export default Sheet
