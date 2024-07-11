import React from 'react'
import { 
  Button 
} from '@mui/material'
import { 
  AlertModal,
  Drawer,
  Form,
  IconLoading   
} from '../..'
import { useForms } from '../../../hooks'
import { useCollection, flattenDocument } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type CollectionFormModalProps = {
  fields: FormFieldType[] 
  resource?: any 
}

const CollectionFormModal: React.FC<CollectionFormModalProps> = (props) => {

  const { 
    fields,
    resource: _resource 
  } = props || {}

  const { 
    openDelete,
    setOpenDelete,

    openEdit,
    setOpenEdit
  } = useCollection()

  const {   
    loading,
    errors,
    resource,  
    handleSubmit,
    handleChange,
    handleRemove,
    handleDelete,    
  } = useForms({
    resource: _resource
  })

  return (
    <>
      <Drawer
				open={openEdit}
				handleClose={() => setOpenEdit(false)}
				title={resource?.id ? 'Edit' : 'Add'}
				actions={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<IconLoading loading={loading} />}
					>
						{resource?.id ? 'Update' : 'Save'}
					</Button>
				}
			>
				<Form
					loading={loading}
					errors={errors}
					fields={ fields }
					resource={flattenDocument(resource)}
					handleChange={handleChange}
					handleRemove={handleRemove}
				/>
			</Drawer>
			<AlertModal
				open={openDelete}
				handleClose={() => setOpenDelete(false)}
				title="Are you sure you want to delete this item?"
				description="This action cannot be reversed."
				handleConfirm={handleDelete}
			/>
    </>
  )
}

export default CollectionFormModal
