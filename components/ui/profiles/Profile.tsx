import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Avatar, ButtonActions, ExpandableText, SocialLink } from '../..'
import { ButtonType } from '../../../types'

export type ProfileProps = {
	image?: string
	label?: string
	title?: string
	description?: string
	socialLinks?: {		
		provider: string
		url: string
	}[]
}

const Profile: React.FC<ProfileProps> = (props) => {
	const {
		label,
		title,
		image,
		description,
		socialLinks = [],
	} = props || {}

  console.log('ProfileProps', props)

	return (
		<Box sx={sx.container}>
			<Stack
				sx={sx.userContainer}
				direction={{ sm: 'row', xs: 'column' }}
				spacing={{ sm: 4, xs: 0 }}
				alignItems="flex-start"
			>
				<Stack direction="column" spacing={1} width='100%' alignItems="center">
					<Avatar src={image} size={120} enableGradient />
					<Stack direction="row" spacing={0}>
						{socialLinks?.map((link, index) => (
							<Box p={'2px'} key={index}>
								<SocialLink 
                  url={link.url} 
                  size={28} 
                  provider={link.provider} 
                />
							</Box>
						))}
					</Stack>
				</Stack>
				<Stack direction="column" spacing={1}>
					<Typography variant="caption" color="text.secondary" sx={sx.username}>
						{label}
					</Typography>
					<Typography variant="h6" color="text.primary" sx={sx.name}>
						{title}
					</Typography>
					<Stack direction="column" spacing={1}>
						{description && (
							<ExpandableText text={description} color="text.secondary" />
						)}
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Profile

const sx = {
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 1,
	},
	containerBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	userContainer: {
		maxWidth: 600,
	},
	button: {
		boxShadow: 0,
		color: 'text.secondary',
	},
	name: {
		width: '100%',
		minWidth: 200,
		textAlign: {
			sm: 'left',
			xs: 'center',
		},
	},
	avatar: {
		width: 110,
		height: 110,
	},
	avatarContainer: {
		bgcolor: 'common.white',
		height: 126,
		width: 126,
		borderRadius: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	username: {
		boxShadow: 0,
		width: '100%',
		display: 'flex',
		justifyContent: {
			sm: 'flex-start',
			xs: 'center',
		},
	},
	buttons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
	},
}
