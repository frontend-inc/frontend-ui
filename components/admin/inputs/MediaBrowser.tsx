import React, { useState } from 'react'
import { useMedia } from '../../../hooks'
import { useAlerts } from '../../../hooks'
import { Box, Button } from '@mui/material'
import MediaListItem from './MediaListItem'
import MediaList from './MediaList'
import { 
  Drawer, 
  ButtonTabs, 
  MediaUploader, 
  UnsplashList 
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
	const [uploaded, setUploaded] = useState(null)

	const { showAlertError } = useAlerts()

	const { deleteResource } = useMedia()

	const handleTabChange = (value: number) => {
		setTab(value)
	}

	const handleSelect = (resource) => {
		setSelected(resource)
	}

	// Upload methods
	const handleRemoveItem = async () => {
		await deleteResource(uploaded.id)
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
	]

	return (
		<Drawer
			disablePadding
			open={open}
			handleClose={handleClose}
			title={'Browse Media'}
			buttons={
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleAttach}
				>
					Save
				</Button>
			}
		>
			<Box>
				<Box p={1}>
					<ButtonTabs
						disableBorder
						disablePadding
						options={OPTIONS}
						handleChange={handleTabChange}
						value={tab}
					/>
				</Box>
				<Box sx={sx.content}>
					{tab == 0 && (
						<MediaList
							selectedIds={[selected?.id]}
							handleSelect={handleSelect}
						/>
					)}
					{tab == 1 && (
						<>
							{uploaded && (
								<MediaListItem
									item={uploaded}
									handleRemoveItem={handleRemoveItem}
								/>
							)}
							<MediaUploader onComplete={handleComplete} />
						</>
					)}
					{tab == 2 && (
						<>
							{uploaded && (
								<MediaListItem
									item={uploaded}
									handleRemoveItem={handleRemoveItem}
								/>
							)}
							<UnsplashList onComplete={handleComplete} />
						</>
					)}
				</Box>
			</Box>
		</Drawer>
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
	},
}
