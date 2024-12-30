'use client'

import React from 'react'
import {
  Spinner,
  Modal as NextModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/scroll-shadow";

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
            <ScrollShadow 
              style={{ maxHeight: '600px' }} 
              className="w-full"
            >
              {loading ? (
                <div className="w-full flex items-center justify-center h-[160px]">
                  <Spinner />
                </div>
              ) : (
                <div className="w-full">{children}</div>
              )}
            </ScrollShadow>    
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
