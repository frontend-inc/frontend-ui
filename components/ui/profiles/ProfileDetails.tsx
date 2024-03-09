import React from 'react'
import { Box, Stack } from '@mui/material'
import { ProfileInfo, ProfileImage } from '../../../components'

type ProfileDetailsProps = {
	src: string
	title: string
	description: string
	label?: string
	actions?: React.ReactNode
	disableRing?: boolean
}

const ProfileDetails: React.FC<ProfileDetailsProps> = (props) => {
	const { src, disableRing, actions, title, description, label } = props

	return (
		<Stack direction={{ sm: 'row', xs: 'column' }} spacing={2}>
			<Box sx={sx.avatar}>
				<ProfileImage disableRing={disableRing} src={src} size={200} />
			</Box>
			<Box sx={sx.details}>
				<ProfileInfo title={title} description={description} label={label} />
				{actions && actions}
			</Box>
		</Stack>
	)
}

export default ProfileDetails

const sx = {
	avatar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	details: {
		maxWidth: '440px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}
