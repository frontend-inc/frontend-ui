import React from 'react'
import { Drawer, FormFields, IconLoading } from '../../../components'
import { Button } from '@mui/material'

export type ResourceFormProps = {
	open: boolean
	handleClose: () => void
	loading: boolean
	errors: any
	resource: any
	setResource: (resource: any) => void
	handleChange: (ev: any) => void
	handleRemove?: (string: any) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit: () => void
	handleReload: () => void
  inputOptions?: Record<string, React.FC>
  inputParams?: Record<string, any>
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
    handleAddAttachment,
    handleRemoveAttachment,
		fields = [],
    inputOptions,
    inputParams
	} = props || {}

	return (
		<Drawer
			open={open}
			handleClose={handleClose}
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
        handleAddAttachment={handleAddAttachment}
        handleRemoveAttachment={handleRemoveAttachment}
        inputOptions={inputOptions}
        inputParams={inputParams}        
			/>
		</Drawer>
	)
}

export default ResourceForm
