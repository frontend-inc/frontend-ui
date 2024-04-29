import React, { useEffect, useState } from 'react'
import { useAuth, useResource } from 'frontend-js'
import { Stack, Box, Button } from '@mui/material'
import { FormFieldInput, AuthRequired, IconLoading } from '../../../components'
import { flattenDocument } from '../../../helpers'
import { get } from 'lodash'
import { SYSTEM_FIELDS } from '../../../constants'

export type ProfileFormProps = {
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	resource: any
	children?: React.ReactElement[]
}

const ProfileForm: React.FC<ProfileFormProps> = (props) => {
	const { resource, buttonText = 'Submit', fields } = props

	const [submitted, setSubmitted] = useState(false)

	const {
		delayedLoading,
		resource: profile,
		setResource,
		update,
    create,
		removeAttachment,
	} = useResource({
		name: 'document',
		url: `/api/v1/cms/profiles`,
	})

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		if (SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		} else {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		}
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleSubmit = async () => {
		try {
      let resp
      if(profile?.id){
        resp = await update(profile)
      }else{
        resp = await create(profile)
      }      
			if (resp?.id) {
				setSubmitted(true)
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	useEffect(() => {
		if (resource) {
			setResource({
				...resource,
			})
		}
	}, [resource])

	return (
    <AuthRequired>
      <Box sx={sx.root}>
        <Stack spacing={1} sx={sx.root}>
          {fields?.map((field, index) => (
            <FormFieldInput
              key={index}
              field={field}
              value={get(flattenDocument(profile), field.name)}
              handleChange={handleDataChange}
              handleRemove={handleRemove}
            />
          ))}
          <Button
            size="large"
            variant="contained"
            onClick={handleSubmit}
            endIcon={<IconLoading color="primary.contrastText" loading={delayedLoading} />}
          >
            {buttonText}
          </Button>
        </Stack>
      </Box>
    </AuthRequired>
	)
}

export default ProfileForm

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
