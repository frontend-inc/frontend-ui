import React from 'react'
import { SocialFieldType } from '../../../types'
import { SocialField } from '../..'
import { Stack } from '@mui/material'

export type SocialFieldsProps = {
	resource: any
	fields: SocialFieldType[]
}

const SocialFields: React.FC<SocialFieldsProps> = (props) => {
	const { resource, fields } = props || {}

	return (
		<Stack direction="row" spacing={0}>
			{fields?.map((field, i) => (
				<SocialField key={i} field={field} resource={resource} />
			))}
		</Stack>
	)
}

export default SocialFields
