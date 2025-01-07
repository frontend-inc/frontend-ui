'use client'

import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@nextui-org/react'
import { cn } from '@nextui-org/react'

interface ResourceToolbarModalProps {
	open: boolean
	handleClose: () => void
	children: React.ReactNode
}

export default function ResourceToolbarModal(props: ResourceToolbarModalProps) {
	const { open, handleClose, children } = props || {}

	return (
		<div
			className={cn(
        !open && 'hidden',
        'dark-dark bg-background',
				'fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out '
			)}
		>
			<div className="text-secondary-foreground shadow-md">
				<div className="container mx-auto px-4">
					<div className="h-16 flex items-center justify-between">
						<div className="w-10 h-10"></div>
						{children}
						<Button
							isIconOnly
							variant="ghost"
							radius="full"
							className="min-w-8 w-8 h-8"
							onPress={handleClose}
						>
							<X className="h-5 w-5 text-foreground/70" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
