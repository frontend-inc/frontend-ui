import React from 'react'
import { Box, Stack } from '@mui/material'
import { FieldString, FieldText } from '../../../components'

type ProfileInfoProps = {
	title: string
	description: string
	label?: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
	const { title, description, label } = props
	return (
		<Stack direction="column" spacing={1}>
			<Stack direction="column">
				<FieldString value={label} variant="caption" color="text.secondary" />
				<FieldString value={title} />
				<FieldText value={description} variant="body2" color="text.secondary" />
			</Stack>
		</Stack>
	)
}

export default ProfileInfo
