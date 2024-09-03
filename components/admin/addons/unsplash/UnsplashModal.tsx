import React from 'react'
import { useAlerts } from 'frontend-ui/hooks'
import { Icon, Image, Modal } from 'frontend-ui/components'
import UnsplashLogo from './UnsplashLogo'
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Link,
	Avatar,
	IconButton,
	Typography,
	Box,
	Button,
	CircularProgress,
} from '@mui/material'
import copy from 'copy-to-clipboard'
import PoweredByUnsplash from './PoweredByUnsplash'
import { useUnsplash } from 'hooks'
import { UnsplashImageType } from 'types'
import { UNSPLASH_API_KEY } from 'lib/constants'

type UnsplashViewerModalProps = {
	open: boolean
	loading: boolean
	image: UnsplashImageType
	handleUpload: (url: string, filename: string) => void
	handleClose: () => void
}

const UnsplashModal: React.FC<UnsplashViewerModalProps> = (props) => {
	const { loading = false, open, image, handleClose, handleUpload } = props
	const { showAlertSuccess } = useAlerts()

	const handleCopyUrlClick = () => {
		copy(image?.urls?.regular)
		showAlertSuccess('Asset URL copied to clipboard')
	}

	const { fetchDownloadLocation } = useUnsplash({
    apiKey: UNSPLASH_API_KEY
  })

	const handleDownloadClick = async () => {
		let downloadUrl = await fetchDownloadLocation(image)
		handleUpload(downloadUrl, image?.slug)
	}

	const handleUnsplashClick = () => {
		const url =
			image?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	const handleUserClick = () => {
		let url =
			image?.user?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	return (
		<Modal
			open={open}
			loading={loading}
			handleClose={handleClose}
			title={<PoweredByUnsplash />}
			maxWidth="md"
			disablePadding
			buttons={
				<>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleUnsplashClick}
						endIcon={<Icon name={'ExternalLink'} />}
					>
						Visit
						<UnsplashLogo />
					</Button>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleCopyUrlClick}
						startIcon={<Icon name="Copy" />}
					>
						Copy URL
					</Button>
					<Button
						variant="contained"
						onClick={handleDownloadClick}
						startIcon={<Icon name="Download" color="primary.contrastText" />}
					>
						Import
					</Button>
				</>
			}
		>
			{!loading ? (
				<>
					<Image
						alt={image?.alt_description}
						src={image?.urls?.regular}
						height={520}
					/>
					<Box sx={sx.content}>
						<List>
							<ListItem disableGutters>
								<ListItemIcon sx={sx.listItemIcon}>
									<IconButton onClick={handleUserClick}>
										<Avatar
											src={image?.user?.profile_image?.large}
											alt={image?.user?.name}
										/>
									</IconButton>
								</ListItemIcon>
								<ListItemText
									primary={
										<Link
											href={`${image?.user?.links?.html}?utm_source=frontend.co&utm_medium=referral`}
											target="_blank"
											sx={sx.link}
										>
											{image?.user?.name}
										</Link>
									}
									secondary={
										<Typography
											variant="body2"
											color="text.secondary"
											sx={sx.text}
										>
											{image.description}
										</Typography>
									}
								/>
							</ListItem>
						</List>
					</Box>
				</>
			) : (
				<Box sx={sx.loader}>
					<CircularProgress />
				</Box>
			)}
		</Modal>
	)
}

export default UnsplashModal

const sx = {
	loader: {
		p: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	content: {
		px: 1,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	text: {
		width: '100%',
	},
	poweredBy: {
		width: 240,
	},
	image: {
		maxHeight: '100vh',
		maxWidth: '100vw',
	},
	video: {
		width: '100%',
		height: 'auto',
		maxHeight: '100%',
	},
	details: {
		p: 1,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	user: {
		width: 36,
	},
	link: {
		fontSize: 14,
		color: 'text.secondary',
		textDecoration: 'none',
		'&:hover': {
			color: 'text.primary',
		},
	},
	listItemIcon: {
		mr: 3,
	},
}
