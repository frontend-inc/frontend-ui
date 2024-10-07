import React, { useState } from 'react'
import { useMedia } from '../../../hooks'
import { useAlerts } from '../../../hooks'
import { Box, Button } from '@mui/material'
import MediaListItem from './MediaListItem'
import MediaList from './MediaList'
import {
	Modal,
	ButtonTabs,
	MediaUploader,
	UnsplashList,
	BrandfetchInput,
} from '../../../components'

type MediaBrowserProps = {
	open: boolean
	handleClose: () => void
	handleSubmit: (items: any[]) => void
}

const MediaBrowser: React.FC<MediaBrowserProps> = (props) => {
	const { open, handleClose, handleSubmit } = props

	const [tab, setTab] = useState<number>(0)

	const [selected, setSelected] = useState(null)
	const [uploaded, setUploaded] = useState<any>(null)

	const { showAlertError } = useAlerts()

	const { deleteResource } = useMedia()

	const handleTabChange = (value: number) => {
		setTab(value)
	}

	const handleSelect = (resource) => {
		setSelected(resource)
	}

	// Upload methods
	const handleRemove = async (item) => {
		await deleteResource(item.id)
		setUploaded(null)
	}

	const handleComplete = async (resource) => {
		setUploaded(resource)
		setSelected(resource)
		setTab(0)
	}

	const handleAttach = async () => {
		if (selected) {
			handleSubmit([selected])
			handleClose()
		} else {
			showAlertError('There was an error saving the document')
		}
	}

	const OPTIONS = [
		{ label: 'Browse', value: 0 },
		{ label: 'Upload', value: 1 },
		{ label: 'Unsplash', value: 2 },
		{ label: 'Logos', value: 3 },
	]

	return (
		<Modal
			maxWidth="md"
			disablePadding
			open={open}
			handleClose={handleClose}
			title={'Browse Media'}
			buttons={
				<Button variant="contained" color="primary" onClick={handleAttach}>
					Save Media
				</Button>
			}
		>
			<Box>
				<Box sx={sx.buttonsContainer}>
					<Box sx={sx.buttonTabs}>
						<ButtonTabs
							disableBorder
							disablePadding
							options={OPTIONS}
							handleChange={handleTabChange}
							value={tab}
						/>
					</Box>
				</Box>
				<Box sx={sx.content}>
					{tab == 0 && (
						<MediaList
							selectedIds={[selected?.id]}
							handleSelect={handleSelect}
						/>
					)}
					{tab == 1 && <MediaUploader onComplete={handleComplete} />}
					{tab == 2 && <UnsplashList onComplete={handleComplete} />}
					{tab == 3 && <BrandfetchInput onComplete={handleComplete} />}
				</Box>
			</Box>
		</Modal>
	)
}

export default MediaBrowser

const sx = {
	icon: {
		height: 28,
		width: 28,
	},
	progressLoader: {
		p: 0,
	},
	content: {
		p: 2,
		minHeight: '50vh',
	},
	buttonsContainer: {
		px: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTabs: {
		width: '100%',
		maxWidth: 600,
	},
}
