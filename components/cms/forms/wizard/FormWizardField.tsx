import React, { useEffect, useState } from 'react'
import { Fade, Typography, Stack } from '@mui/material'
import FormField from '../FormField'
import { SYSTEM_FIELDS } from '../../../../constants/index'
import { get } from 'lodash'

export type FormWizardProps = {
  field: {
    title: string 
    description: string 
    label: string
    placeholder: string
    name: string
  },
  handleChange: (ev: any) => void
  handleRemove: (name: string) => void
  resource: any
  fadeIn: boolean
  setResource: (resource: any) => void
}

const FormWizardField: React.FC<FormWizardProps> = (props) => {
	
  const { 
    field, 
    fadeIn,
    resource, 
    setResource, 
    handleChange, 
    handleRemove 
  } = props

  const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		setResource((prev) => ({
			...prev,
			data: {
				...prev.data,
				[name]: value,
			},
		}))
	}


	return( 
  <Fade in={ fadeIn } timeout={ 350 } >
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={1}>
        <Typography sx={ sx.title } variant="h4" color="text.primary">
          { field?.title }
        </Typography>
        <Typography sx={ sx.description } variant="body1" color="text.secondary">
          { field?.description }
        </Typography>
      </Stack>
    { field && (
      <>
      { SYSTEM_FIELDS.includes(field.name) ? (
        <FormField
          field={field}
          value={get(resource, field.name)}
          handleChange={handleChange}
          handleRemove={handleRemove}
        />
      ):(
        <FormField
          field={field}
          value={get(resource?.data, field.name)}
          handleChange={handleDataChange}
        />
      )}
      </>
    )}
    </Stack>
    </Fade>
	)
}

export default FormWizardField

const sx = {
  title: {
    textAlign: 'center',
    width: '100%'
  },
  description: {
    textAlign: 'center',
    width: '100%'
  },
}
