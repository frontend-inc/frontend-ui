'use client'

import React from 'react'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerPortal,
	DrawerOverlay,
	ScrollArea,
} from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import { Button } from '../../../components'
import { Loader2 } from 'lucide-react'
import { X } from 'lucide-react'
import { cn } from 'frontend-shadcn'

type CustomDrawerProps = {
	open: boolean
	handleClose: (open: boolean) => void
	loading?: boolean
	title?: string
	description?: string
	buttons?: React.ReactNode
	children: React.ReactNode
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function CustomDrawer({
	open,
	handleClose,
	loading,
	title,
	description,
	children,
	buttons,
	maxWidth = 'md',
  className
}: CustomDrawerProps) {
  
	const maxWidthClasses = {
		sm: 'max-w-screen-sm',
		md: 'max-w-screen-md',
		lg: 'max-w-screen-lg',
		xl: 'max-w-screen-xl',
	}

	const { mode } = useTheme()

	return (
		<Drawer shouldScaleBackground open={open} onOpenChange={handleClose}>
			<DrawerPortal>
				<DrawerContent shouldScaleBackground className={cn(mode, className)}>
					<DrawerHeader>
						<div className="flex w-full justify-end">
							<DrawerClose>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
							</DrawerClose>
						</div>

						{title && (
							<DrawerTitle>
								<span className="flex font-semibold justify-center w-full text-3xl text-foreground">
									{title}
								</span>
							</DrawerTitle>
						)}
						{description && (
							<DrawerDescription>
								<div className="flex flex-row justify-center w-full">
									<div className={cn(maxWidthClasses[maxWidth], 'w-full')}>
										<div className="text-lg text-primary">{description}</div>
									</div>
								</div>
							</DrawerDescription>
						)}
					</DrawerHeader>
					<ScrollArea>
						<div className="flex justify-center w-full py-6 px-6 sm:px-0">
							<div
								className={cn(
									maxWidthClasses[maxWidth],
									'w-full min-h-[50vh] max-h-[75vh]'
								)}
							>
                { !loading ? 
                  children : 
                  <div className="flex justify-center items-center w-full">
                    <Loader2 className="animate-spin h-12 w-12 text-foreground" /> 
                  </div>
                } 
							</div>
						</div>
					</ScrollArea>
					{buttons && (
						<DrawerFooter className="w-full flex items-center justify-center">
							<div className={cn(maxWidthClasses[maxWidth], 'w-full')}>
								{buttons}
							</div>
						</DrawerFooter>
					)}
				</DrawerContent>
			</DrawerPortal>
		</Drawer>
	)
}
