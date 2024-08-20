import React from 'react' 
import { Drawer, FormFields, IconLoading } from '../../../components'
import { Button } from '@mui/material'

type ResourceFormProps = {
  open: boolean
  handleClose: () => void
  loading: boolean
  errors: any
  resource: any
  handleChange: (ev: any) => void
  handleRemove: (field: any) => void
  handleSubmit: () => void
  fields: any[]
}

const ResourceForm: React.FC<ResourceFormProps> = (props) => {

  const { 
    loading,
    errors,
    open, 
    handleClose, 
    resource, 
    handleChange, 
    handleRemove,
    handleSubmit,
    fields=[],     
  } = props || {}

  return (
    <Drawer
				open={open}
				handleClose={ handleClose }
				title={resource?.id ? 'Edit' : 'Add'}
				buttons={
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
				<FormFields
					errors={errors}
					loading={loading}
					fields={fields}
					resource={resource}
					handleChange={handleChange}
					handleRemove={handleRemove}
				/>
			</Drawer>
  )
}

export default ResourceForm