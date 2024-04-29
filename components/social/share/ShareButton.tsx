import React, { useState } from 'react'
import {
	Box,
	Button,
	IconButton,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import { useAlerts } from '../../../hooks'
import { Modal, Icon, SocialLink } from '../..'
import copy from 'copy-to-clipboard'

type ShareButtonProps = {
	url: string
}

const ShareButton: React.FC<ShareButtonProps> = (props) => {
	const { url } = props
	const [open, setOpen] = useState(false)

	const SOCIAL_PLATFORMS = [
		{ label: 'Share to Instagram', value: 'instagram' },
		{ label: 'Share to Facebook', value: 'facebook' },
		{ label: 'Share to Twitter', value: 'twitter' },
		{ label: 'Share to LinkedIn', value: 'linkedin' },
		{ label: 'Send by Email', value: 'email' },
		{ label: 'Copy share URL', value: 'copy' },
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
			case 'copy':
				copy(url)
				showAlertSuccess('Share link copied to clipboard')
				return
			default:
				return
		}
	}

	return (
		<Box>
			<IconButton sx={sx.iconButton} onClick={handleClick}>
				<Icon name="Share" />
			</IconButton>
			<Modal open={open} handleClose={() => setOpen(false)} title="Share">
				<List>
					{SOCIAL_PLATFORMS.map((platform, index) => (
						<ListItem key={index}>
							<ListItemButton
								onClick={(ev) => handleShareClick(platform.value)}
							>
								<ListItemIcon>
									<SocialLink provider={platform.value} />
								</ListItemIcon>
								<ListItemText
									primary={
										<Typography variant="body1">{platform.label}</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Modal>
		</Box>
	)
}

export default ShareButton

const sx = {
	iconButton: {
		bgcolor: 'tertiary.main',
	},
}