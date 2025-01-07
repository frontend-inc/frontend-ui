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
	ScrollArea,
} from 'frontend-shadcn'
import { X } from 'lucide-react'
import { cn, Spinner } from '@nextui-org/react'
import { useTheme } from '../../../hooks'

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

export default function CustomDrawer(props: CustomDrawerProps) {
	const {
		open,
		handleClose,
		loading,
		title,
		description,
		children,
		buttons,
		maxWidth = 'md',
		className,
	} = props

	const maxWidthClasses = {
		sm: 'max-w-screen-sm',
		md: 'max-w-screen-md',
		lg: 'max-w-screen-lg',
		xl: 'max-w-screen-xl',
	}

	const { themeClass } = useTheme()

	return (
		<Drawer open={open} onOpenChange={handleClose}>
			<DrawerPortal>
				<DrawerContent className={cn(themeClass, className)}>
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
								{!loading ? (
									children
								) : (
									<div className="flex justify-center items-center w-full">
										<Spinner />
									</div>
								)}
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
