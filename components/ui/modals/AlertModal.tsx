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

const AlertModal: React.FC<AlertModalProps> = ({
	loading = false,
	title = 'Please confirm or cancel this action.',
	description = 'This action is not reversable.',
	open,
	handleClose,
	handleConfirm,
}) => {
	return (
		<AlertDialog open={open} onOpenChange={handleClose}>
      <AlertDialogOverlay className="bg-black/50" />
			<AlertDialogContent
        className={cn(
          'max-w-screen-md bg-background rounded-md overflow-hidden',
          'fixed transform -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2',
          'fade-in duration-300 scale-in',
          'data-[state=closed]:opacity-0 duration-0'
        )}
      >
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
        {loading && (
          <div className="flex flex-col items-center justify-center">
            <CircularLoader size='lg' />
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
              loading={ loading }
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
