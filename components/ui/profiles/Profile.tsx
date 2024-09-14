import React from 'react'
import { Box, Stack } from '@mui/material'
import { ProfileInfo, ProfileImage } from '../..'

export type ProfileProps = {
	src: string
	title: string
	description: string
	label?: string
  socialLinks?: {
    label: string
    value: string
    url: string
  }[]
	buttons?: React.ReactNode
	disableRing?: boolean
}

const Profile: React.FC<ProfileProps> = (props) => {
	const { src, disableRing, buttons, title, description, label, socialLinks=[] } = props

	return (
		<Stack direction={{ sm: 'row', xs: 'column' }} spacing={2}>
			<Box sx={sx.avatar}>
				<ProfileImage 
          disableRing={disableRing} 
          src={src} 
          size={200} 
        />
			</Box>
			<Box sx={sx.details}>
				<ProfileInfo 
          title={title} 
          description={description} 
          label={label} 
          socialLinks={socialLinks}
        />
				{buttons && buttons}
			</Box>
		</Stack>
	)
}

export default Profile

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
