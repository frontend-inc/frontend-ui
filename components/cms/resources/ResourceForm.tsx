'use client'

import React from 'react'
import { Sheet, FormFields } from '../../../components'
import { Button } from '@nextui-org/react'

export type ResourceFormProps = {
	title?: string
	open: boolean
	handleClose: () => void
	loading: boolean
  isPublishLoading: boolean
	errors: any
	resource: any
	setResource: (resource: any) => void
	handleChange: (ev: any) => void
	handleRemove?: (string: any) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit: () => void
  handlePublish: () => void
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
    isPublishLoading,
		errors,
		title,
		open,
		handleClose,
		resource,
		handleChange,
		handleRemove,
		handleSubmit,
    handlePublish,
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
        <div className="flex flex-row space-x-4 justify-between">
          <Button 
            fullWidth 
            variant="solid"
            color="primary"
            onPress={handleSubmit} 
            isLoading={loading}
          >
            {resource?.id ? 'Update' : 'Save'}
          </Button>
          <Button 
            fullWidth 
            variant="solid"
            color="success"
            onPress={handlePublish} 
            isLoading={isPublishLoading}
          >
            Publish 
          </Button>
        </div>
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
