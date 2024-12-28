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
import {
  Modal as NextModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { cn } from 'frontend-shadcn'
import { ScrollArea } from 'frontend-shadcn'
import { Loader } from '../../../components'
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
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
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

	return (
		<NextModal size={ maxWidth } isOpen={open} onOpenChange={handleClose}>
			<ModalContent>
        {(onClose) => (
          <>
          <ModalHeader className="mt-4">
            {title}					
          </ModalHeader>
          <ModalBody>        
              {loading ? (
                <Loader loading={loading} />
              ) : (
                <div className="w-full">{children}</div>
              )}
          </ModalBody>        
          {!loading && buttons && (
            <ModalFooter>{buttons}</ModalFooter>
          )}
          </>
        )}
			</ModalContent>
		</NextModal>
	)
}
