'use client'

import React from 'react'
import { DrawerFooter } from 'frontend-shadcn'
import { 
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,  
} from '@nextui-org/react'

type SheetProps = {
	open: boolean
	loading?: boolean
	title?: string
	side?: 'left' | 'right'
	handleClose: () => void
	buttons?: React.ReactNode
	children: React.ReactNode
}

const Sheet: React.FC<SheetProps> = (props) => {
	const {
		open,
		title,
		handleClose,
		children,
		buttons,
	} = props

	return (
		<Drawer isOpen={open} onOpenChange={handleClose}>
			<DrawerContent>			
				<DrawerHeader className="mt-4">
					{title}
				</DrawerHeader>
				<DrawerBody>
				
					{children}
				</DrawerBody>
        <DrawerFooter>
          { buttons }
        </DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default Sheet
