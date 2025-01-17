'use client'

import React from 'react'
import {
	cn,
	Spinner,
	Modal as NextModal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react'
import { useTheme } from '../../../hooks'

type ModalProps = {
	open: boolean
	loading?: boolean
	handleClose: () => void
	icon?: string
	title?: string | React.ReactNode
	description?: string
	buttons?: React.ReactNode
	children?: React.ReactNode
	maxWidth?:
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| 'full'
	secondaryActions?: React.ReactNode
	className?: string
}

export default function Modal(props: ModalProps) {
	const {
		open,
		loading = false,
		handleClose,
		title,
		buttons,
		children,
		maxWidth = 'md',
	} = props

	const { themeClass } = useTheme()

	return (
		<NextModal
			size={maxWidth}
			isOpen={open}
			onOpenChange={handleClose}
			className={themeClass}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="mt-4 text-foreground">{title}</ModalHeader>
						<ModalBody className="px-4 w-full overflow-y-scroll max-h-[calc(100vh-200px)]">
							{loading ? (
								<div className="w-full flex items-center justify-center h-[160px]">
									<Spinner />
								</div>
							) : (
								children
							)}
						</ModalBody>
						{!loading && buttons && <ModalFooter>{buttons}</ModalFooter>}
					</>
				)}
			</ModalContent>
		</NextModal>
	)
}
