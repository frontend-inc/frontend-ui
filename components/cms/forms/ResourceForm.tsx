import React, { useContext } from 'react'
import { 
  Button 
} from '@mui/material'
import { 
  AlertModal,
  Drawer,
  Form,
  IconLoading   
} from '../../../components'
import { useForms } from '../../../hooks'
import { flattenDocument } from 'frontend-js'
import { FormFieldType } from '../../../types'
import { ResourceContext } from 'frontend-js'

export type ResourceFormProps = {
  fields: FormFieldType[] 
  resource?: any 
}

const ResourceForm: React.FC<ResourceFormProps> = (props) => {

  const { 
    fields,
    resource: _resource 
  } = props || {}

  const { 
    openDeleteModal,
    setOpenDeleteModal,

    openFormModal,
    setOpenFormModal
  } = useContext(ResourceContext) as any 

  const {   
    loading,
    errors,
    resource,  
    handleSubmit,
    handleDataChange,
    handleRemove,
    handleDelete,    
  } = useForms({
    resource: _resource
  })

  return (
    <>
      <Drawer
				open={openFormModal}
				handleClose={() => setOpenFormModal(false)}
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
					handleChange={handleDataChange}
					handleRemove={handleRemove}
				/>
			</Drawer>
			<AlertModal
				open={openDeleteModal}
				handleClose={() => setOpenDeleteModal(false)}
				title="Are you sure you want to delete this item?"
				description="This action cannot be reversed."
				handleConfirm={handleDelete}
			/>
    </>
  )
}

export default ResourceForm
