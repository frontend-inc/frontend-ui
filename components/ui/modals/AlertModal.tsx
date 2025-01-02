'use client'

import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,  
} from "@nextui-org/react";
import { Typography } from '../../../components';
import { cn } from '@nextui-org/react'

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
		<Modal isOpen={open} onOpenChange={handleClose}>
			<ModalContent>				
        {((onClose) => (
          <>
            <ModalHeader></ModalHeader>
      			<ModalBody className="flex flex-col items-center justify-center py-6">
              { loading ? (
                  <Spinner />
				      ):(
                <>
                  <Typography variant="subtitle2">
                    { title }
                  </Typography>
                  <Typography variant="body1" className='text-foreground/70'>
                    { description }
                  </Typography>
                </>
              )}
            </ModalBody>							
				    <ModalFooter>
              <Button variant="ghost" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="danger"
                variant="solid"
                onPress={handleConfirm}
                disabled={loading}
                isLoading={loading}
              >
                Confirm
              </Button>
            </ModalFooter>
          </>
        ))}			
      </ModalContent>
		</Modal>
	)
}

export default AlertModal
