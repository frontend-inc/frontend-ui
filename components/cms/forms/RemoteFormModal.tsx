import React from 'react'
import { RemoteForm, Drawer } from '../..'
import { RemoteFormProps } from './RemoteForm'

export type RemoteFormModalProps = RemoteFormProps & {
  title?: string
  open: boolean
  handleClose: () => void	
}

const RemoteFormModal: React.FC<RemoteFormModalProps> = (props) => {

	const {
    title,
    open,
    handleClose,
    ...rest 
	} = props

	return (
    <Drawer 
      open={open}
      handleClose={handleClose}
      title={title}
    >
      <RemoteForm 
        { ...rest }
      />
    </Drawer>
	)
}

export default RemoteFormModal
