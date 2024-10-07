import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import {
	Sheet,
	SheetContent,
	SheetHeader,
  SheetFooter,
	SheetTitle,
} from '../../../shadcn/ui/sheet'

type DrawerProps = {
	open: boolean
	loading?: boolean
	title?: string
	anchor?: 'left' | 'right' | 'top' | 'bottom'
	handleClose: () => void
	buttons?: React.ReactNode
	children: React.ReactNode
	disablePadding?: boolean
	mode?: 'dark' | 'light'
	className?: string
	fullWidth?: boolean
}

const Drawer: React.FC<DrawerProps> = ({
	open,
	title,
	anchor = 'right',
	handleClose,
	children,
	buttons,
	disablePadding = false,
	fullWidth = false,
	mode = 'dark',
	className,
}) => {
	const side = anchor === 'left' || anchor === 'right' ? anchor : 'right'

	return (
		<Sheet open={open} onOpenChange={handleClose}>
			<SheetContent
				side={side}
				className={cn(
					mode,
					disablePadding && 'p-0',
					'flex flex-col',
					fullWidth ? 'w-screen max-w-full' : 'w-full max-w-sm sm:max-w-md',
					className
				)}
			>
				<SheetHeader>
					<SheetTitle>
						{title}
					</SheetTitle>
				</SheetHeader>
				<div
					className={cn(
						'flex-grow overflow-y-auto',
					)}
				>
					{children}
				</div>
				{buttons && (
					<SheetFooter>
						{buttons}
          </SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	)
}

export default Drawer
