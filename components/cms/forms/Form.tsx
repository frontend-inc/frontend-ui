import React from 'react'
import { Stack, Button } from '@mui/material'
import FormFields from './FormFields'
import { get } from 'lodash'
import { FormFieldType } from '../../../types'
import { IconLoading } from '../..'
import { validateFieldConditions } from '../../../helpers'

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
		<Stack spacing={1} sx={sx.root}>
      <FormFields 
        errors={errors}
        fields={ fields }
        resource={ resource }
        handleChange={ handleChange }
        handleRemove={ handleRemove }
        handleAddAttachment={ handleAddAttachment }
        handleRemoveAttachment={ handleRemoveAttachment }
        inputOptions={inputOptions}
        inputParams={inputParams}
      />			
			{handleSubmit && (
				<Button
					size="large"
					variant="contained"
					onClick={handleSubmit}
					disabled={loading}
					endIcon={
						loading ? (
							<IconLoading color="primary.contrastText" loading={loading} />
						) : null
					}
				>
					{buttonText}
				</Button>
			)}
		</Stack>
	)
}

export default Form

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
