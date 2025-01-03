'use client'

import React from 'react'
import { DrawerFooter } from 'frontend-shadcn'
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerProps,
} from '@nextui-org/react'
import { useTheme } from '../../../hooks'

type SheetProps = DrawerProps & {
	open: boolean
	loading?: boolean
	title?: string
	side?: 'left' | 'right'
	handleClose: () => void
	buttons?: React.ReactNode
}

const Sheet: React.FC<SheetProps> = (props) => {
	const { open, title, handleClose, children, buttons } = props

	const { themeClass } = useTheme()

	return (
		<Drawer isOpen={open} onOpenChange={handleClose} className={themeClass}>
			<DrawerContent>
				<DrawerHeader>{title}</DrawerHeader>
				<DrawerBody>{children}</DrawerBody>
				<DrawerFooter>{buttons}</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default Sheet
