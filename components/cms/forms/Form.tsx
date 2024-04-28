import React from 'react'
import { Stack, Button } from '@mui/material'
import FormFieldInput from './FormFieldInput'
import { get } from 'lodash'
import { FieldType, SyntheticEventType } from '../../../types'
import { IconLoading } from '../../../components'

export type FormProps = {
  loading: boolean
  errors: any 
	fields: FieldType[]
  resource: any 
  handleChange: (e: SyntheticEventType) => void
  handleRemove: (name: string) => void
  handleSubmit: () => void 
  buttonText?: string
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
    buttonText="Submit" 
  } = props

	return( 
    <Stack spacing={1} sx={sx.root}>
      {fields?.map((field, index) => (
        <FormFieldInput
          key={index}
          errors={errors}
          field={field}
          value={get(resource, field.name)}
          handleChange={handleChange}
          handleRemove={handleRemove}
        />
      ))}
      { handleSubmit && (
        <Button
          size="large"
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          endIcon={<IconLoading color="primary" loading={loading} />}
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
