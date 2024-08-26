import React, { useState } from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useAlerts } from '../../../hooks'
import { Modal, SocialIcon } from '../..'
import { IosShare } from '@mui/icons-material'

type ShareButtonProps = {
	url: string
	variant?: 'icon' | 'button'
}

const ShareButton: React.FC<ShareButtonProps> = (props) => {
	const { url, variant = 'icon' } = props
	const [open, setOpen] = useState(false)

	const SOCIAL_PROVIDERS = [
		{ label: 'Share to Instagram', value: 'instagram' },
		{ label: 'Share to Facebook', value: 'facebook' },
		{ label: 'Share to Twitter', value: 'twitter' },
		{ label: 'Share to LinkedIn', value: 'linkedin' },
		{ label: 'Send by Email', value: 'email' },
	]

	const { showAlertSuccess } = useAlerts()

	const handleClick = () => {
		setOpen(true)
	}

	const handleShareClick = (platform) => {
		setOpen(false)
		const shareUrl = getShareUrl(platform, url)
		if (platform == 'copy') {
			showAlertSuccess('Share link copied to clipboard')
		} else {
			window.open(shareUrl, '_blank')
		}
	}

	const getShareUrl = (platform: string, url: string) => {
		switch (platform) {
			case 'instagram':
				return `https://www.instagram.com/?url=${url}`
			case 'facebook':
				return `https://www.facebook.com/sharer/sharer.php?u=${url}`
			case 'twitter':
				return `https://twitter.com/intent/tweet?url=${url}`
			case 'pinterest':
				return `https://pinterest.com/pin/create/button/?url=${url}`
			case 'linkedin':
				return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
			case 'email':
				return `mailto:?subject=Check out this product&body=${url}`
			default:
				return
		}
	}

	return (
		<Box>
			{variant == 'icon' ? (
				<IconButton sx={sx.iconButton} onClick={handleClick}>
					<IosShare fontSize="small" />
				</IconButton>
			) : (
				<IconButton sx={sx.button} onClick={handleClick}>
					<IosShare fontSize="small" />
				</IconButton>
			)}
			<Modal open={open} handleClose={() => setOpen(false)}>
				<Box p={4}>
					<Stack spacing={2}>
						<Box width="100%">
							<Typography sx={sx.text} color="text.primary" variant="subtitle1">
								Share to social media
							</Typography>
							<Typography sx={sx.text} color="text.secondary" variant="body1">
								Select your social media platform
							</Typography>
						</Box>
						<Stack direction="row" spacing={1} sx={sx.socialButtons}>
							{SOCIAL_PROVIDERS.map((provider, index) => (
								<SocialIcon
									key={index}
									provider={provider.value}
									handleClick={() => handleShareClick(provider.value)}
									size={36}
								/>
							))}
						</Stack>
					</Stack>
				</Box>
			</Modal>
		</Box>
	)
}

export default ShareButton

const sx = {
	iconButton: {
		border: '1px solid',
		borderColor: 'divider',
		color: 'text.secondary',
	},
	button: {
		border: '1px solid',
		borderColor: 'divider',
		color: 'text.secondary'
	},
	socialButtons: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		width: '100%',
		textAlign: 'center',
	},
}
