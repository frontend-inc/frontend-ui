import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '../../../shadcn/ui/dialog'
import { Button } from '../../../shadcn/ui/button'
import { Icon, Loader } from '../../../components'

type ModalProps = {
	open: boolean
	loading?: boolean
	handleClose: () => void
	icon?: string
	avatar?: React.ReactNode
	title?: string | React.ReactNode
	subtitle?: string
	buttons?: React.ReactNode
	children?: React.ReactNode
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	secondaryActions?: React.ReactNode
	disablePadding?: boolean
	fullScreen?: boolean
  mode?: 'dark' | 'light'
	enableCancel?: boolean
	hideBackdrop?: boolean
	disableClose?: boolean
	disableHeader?: boolean
}

const Modal: React.FC<ModalProps> = ({
	open,
	loading = false,
	handleClose,
	avatar,
	icon,
	title,
	buttons,
	children,
	secondaryActions,
	disablePadding = false,
	fullScreen,
  mode,
	enableCancel = false,
	disableHeader = false,
}) => {
	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent
				className={cn(
          mode,
					'bg-background rounded-md overflow-hidden max-h-[600px] overflow-y-scroll',
					fullScreen ? 'w-screen h-screen' : 'w-full'
				)}
			>
				{!disableHeader && (
					<DialogHeader className="px-2 py-1">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								{avatar}
								{icon && <Icon name={icon} />}
								<DialogTitle className="text-foreground">{title}</DialogTitle>
							</div>
							{!loading && (
								<div className="flex items-center">{secondaryActions}</div>
							)}
						</div>
					</DialogHeader>
				)}
				<div
					className={cn(
						'my-1 h-full overflow-y-auto',
						disablePadding && 'm-0 p-0'
					)}
				>
					<Loader loading={loading} />
					{!loading && <div className="h-full w-full">{children}</div>}
				</div>
				{!loading && (enableCancel || buttons) && (
					<DialogFooter>
						{enableCancel && (
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
						)}
						{buttons}
					</DialogFooter>
				)}
			</DialogContent>
		</Dialog>
	)
}

export default Modal
