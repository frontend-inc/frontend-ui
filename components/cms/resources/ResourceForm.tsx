'use client'

import React from 'react'
import { Sheet, FormFields } from '../../../components'
import { Button } from '../../../components'

export type ResourceFormProps = {
	title?: string
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
	inputOptions?: any
	inputParams?: any
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export type FormProps = ResourceFormProps & {
	fields: any[]
}

const ResourceForm: React.FC<FormProps> = (props) => {
	const {
		loading,
		errors,
		title,
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
		inputParams,
    maxWidth="xs"
	} = props || {}

	return (
		<Sheet
			open={open}
			handleClose={handleClose}
			title={title ? title : resource?.id ? 'Edit' : 'Add'}
      maxWidth={maxWidth}
			buttons={
				<Button fullWidth onClick={handleSubmit} loading={loading}>
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
		</Sheet>
	)
}

export default ResourceForm
