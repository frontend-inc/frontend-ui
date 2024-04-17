import React from 'react'
import { Stack } from '@mui/material'
import { ActionType, DocumentType } from '../../../types'
import { Person, Details } from '../../../components'

export type ProfileProps = {
	fields: any[]
	url: string
	enableBorder?: boolean
	actions?: ActionType[]
	resource: DocumentType
}

const Profile: React.FC<ProfileProps> = (props) => {
	const {
    url,
		fields,
		enableBorder,
		actions,
		resource,
	} = props || {}

	return (
		<Stack direction="column" spacing={4} sx={sx.root}>
			<Person 
        resource={resource} 
        actions={actions} 
      />
			<Details
				url={url}
				fields={fields}
				resource={resource}
				enableBorder={enableBorder}
			/>
		</Stack>
	)
}

export default Profile

const sx = {
	root: {
		width: '100%',
	},
}
