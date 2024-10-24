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
} from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import { Button } from 'frontend-shadcn'
import { X } from 'lucide-react'

type CustomDrawerProps = {
	open: boolean
	handleClose: (open: boolean) => void
	loading?: boolean
	title?: string
	description?: string
	buttons?: React.ReactNode
	children: React.ReactNode
	footer?: React.ReactNode
	disablePadding?: boolean
}

export default function CustomDrawer({
	open,
	handleClose,
	loading,
	title,
	description,
	children,
	buttons,
}: CustomDrawerProps) {

  const { mode } = useTheme()

	return (
		<Drawer open={open} onOpenChange={handleClose}>
			<DrawerContent className={ mode }>
				<DrawerHeader>
					<div className="flex w-full justify-end">
						<DrawerClose asChild>
							<Button variant="ghost" size="icon">
								<X className="h-8 w-8" />
								<span className="sr-only">Close</span>
							</Button>
						</DrawerClose>
					</div>

					{title && (
						<DrawerTitle>
							<div className="flex flex-row justify-center w-full">
								<div className="flex flex-row max-w-screen-md w-full">
									<div className="text-3xl text-primary">{title}</div>
								</div>
							</div>
						</DrawerTitle>
					)}
					{description && (
						<DrawerDescription>
							<div className="flex flex-row justify-center w-full">
								<div className="flex flex-row max-w-screen-md w-full">
									<div className="text-lg text-primary">{description}</div>
								</div>
							</div>
						</DrawerDescription>
					)}
				</DrawerHeader>
				<div className="flex-grow overflow-y-auto px-4 flex flex-col items-center">
					<div className="max-w-screen-md w-full">{children}</div>
				</div>
				{!loading && buttons && (
					<DrawerFooter className="px-10 pb-6 flex flex-row justify-center">
						<div className="w-full max-w-screen-md">{buttons}</div>
					</DrawerFooter>
				)}
			</DrawerContent>
		</Drawer>
	)
}
