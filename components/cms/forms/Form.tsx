'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import FormFields from './FormFields'
import { FormFieldType } from '../../../types'

export type FormProps = {
	loading?: boolean
	errors: any
	fields: FormFieldType[]
	resource: any
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRemove?: (name: string) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit: () => void
	buttonText?: string
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const Form: React.FC<FormProps> = (props) => {
	const {
		errors,
		loading,
		fields,
		resource,
		handleChange,
		handleRemove,
		handleSubmit,
		handleAddAttachment,
		handleRemoveAttachment,
		buttonText = 'Submit',
		inputOptions,
		inputParams,
	} = props

	return (
		<div className="flex flex-col space-y-4">
			<FormFields
				errors={errors}
				fields={fields}
				resource={resource}
				handleChange={handleChange}
				handleRemove={handleRemove}
				handleAddAttachment={handleAddAttachment}
				handleRemoveAttachment={handleRemoveAttachment}
				inputOptions={inputOptions}
				inputParams={inputParams}
			/>
			{handleSubmit && (
				<Button
					variant="solid"
					color="primary"
					isLoading={loading}
					onPress={handleSubmit}
					disabled={loading}
				>
					{buttonText}
				</Button>
			)}
		</div>
	)
}

export default Form
