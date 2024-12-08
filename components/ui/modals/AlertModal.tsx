'use client'

import React from 'react'
import {
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from 'frontend-shadcn'
import { Button, CircularLoader } from '../../../components'
import { cn } from 'frontend-shadcn'

type AlertModalProps = {
	loading?: boolean
	title?: string
	description?: string
	icon?: string
	open: boolean
	handleClose: () => void
	handleConfirm: () => void
}

const AlertModal: React.FC<AlertModalProps> = (props) => {

  const {
    loading = false,
    title = 'Please confirm or cancel this action.',
    description = 'This action is not reversable.',
    open,
    handleClose,
    handleConfirm,
  } = props
  
	return (
		<AlertDialog open={open} onOpenChange={handleClose}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				{loading && (
					<div className="flex flex-col items-center justify-center">
						<CircularLoader size="lg" />
					</div>
				)}
				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
					</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button
							variant="default"
							onClick={handleConfirm}
							className={cn(loading && 'cursor-not-allowed opacity-50')}
							disabled={loading}
							loading={loading}
						>
							Confirm
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertModal
