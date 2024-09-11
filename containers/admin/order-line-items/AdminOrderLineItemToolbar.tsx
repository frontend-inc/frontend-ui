import React, { useState } from 'react'
import {
  FormModal,
	ResourceToolbarModal,
	PrimaryButton,
	SecondaryButton,
} from '../../../components'
import { Stack } from '@mui/material'
import { useResource } from 'frontend-js'
import { useOrders, useAdmin } from '../../../hooks'

const AdminOrderLineItemToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

  const [openModal, setOpenModal] = useState(false)

	const {
    loading, 
    errors,
    order,
    handleChange,    
    updateOrders 
  } = useOrders()

	const handleUpdateClick = async () => {
		
	}

	const handleUpdate = async () => {
		await updateOrders(selectedIds, order)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<Stack direction="row" spacing={1}>
				<PrimaryButton 
          onClick={handleUpdateClick}
        >
          Update
        </PrimaryButton>
			</Stack>
      <FormModal 
        errors={errors}
        open={ openModal }
        handleClose={ () => setOpenModal(false) }
        title="Update Orders"
        fields={[
            { 
              label: 'Status', 
              name: 'status', 
              variant: 'select', 
              options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Canceled', value: 'canceled' },
                { label: 'Completed', value: 'completed' },
                { label: 'Refunded', value: 'refunded' },                
                { label: 'Exchanged', value: 'exchanged' },
              ]
          }
        ]}
        resource={ order }
        handleChange={ handleChange }   
        handleSubmit={ handleUpdate }     
      />
		</ResourceToolbarModal>
	)
}

export default AdminOrderLineItemToolbar
