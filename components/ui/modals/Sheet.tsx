'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import {
  Button,
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
	anchor?: 'left' | 'right' | 'top' | 'bottom'
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
	anchor = 'right',
	handleClose,
	children,
	buttons,
	disablePadding = false,
	fullWidth = false,
	mode = 'light',
	className,
}) => {
	const side = anchor === 'left' || anchor === 'right' ? anchor : 'right'

	return (
		<ShadcnSheet open={open} onOpenChange={handleClose}>
			<SheetContent
				side={side}
				className={cn(
					mode,
          disablePadding && "px-0", 
					"flex flex-col w-screen sm:max-w-sm sm:w-full",
					className
				)}
			>
          <SheetClose asChild>
            <Button
              variant="ghost"              
              className={ 
                cn(                  
                  "m-2 p-2 absolute right-0 top-0 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                )
              }
            >
              <X className="h-5 w-5 text-foreground" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
				<SheetHeader className='mt-4'>
					<SheetTitle className={cn(
            disablePadding && "px-4"
          )}>{title}</SheetTitle>
				</SheetHeader>
				<div className={cn('flex-grow overflow-y-auto')}>{children}</div>
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
