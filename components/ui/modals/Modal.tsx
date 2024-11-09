'use client'

import React from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import { ScrollArea } from 'frontend-shadcn'
import { Loader } from '../../../components'

type ModalProps = {
	open: boolean
	loading?: boolean
	handleClose: () => void
	icon?: string
	title?: string | React.ReactNode
	description?: string
	buttons?: React.ReactNode
	children?: React.ReactNode
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	secondaryActions?: React.ReactNode
}

export default function Modal({
	open,
	loading = false,
	handleClose,
	title,
	buttons,
	children,
	description,
}: ModalProps) {
	const { mode } = useTheme()

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className={mode}>
				<DialogHeader className="mt-4">
					<DialogTitle>
						<span className="text-foreground">{title}</span>
					</DialogTitle>
					{description && <DialogDescription>{description}</DialogDescription>}
				</DialogHeader>
				<ScrollArea className="max-h-[440px]">
					<div className="space-y-4 p-4">
						{loading ? (
							<Loader loading={loading} />
						) : (
							<div className="w-full">{children}</div>
						)}
					</div>
				</ScrollArea>
				{!loading && buttons && <DialogFooter>{buttons}</DialogFooter>}
			</DialogContent>
		</Dialog>
	)
}
