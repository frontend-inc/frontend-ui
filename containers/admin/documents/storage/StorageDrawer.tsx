import React, { useState } from 'react'
import { Drawer, ButtonTabs } from '../../../../components'
import { useStorage } from 'hooks'
import { useAlerts } from '../../../../hooks'
import { Box, Button } from '@mui/material'
import StorageItem from './StorageItem'
import { MediaUploader} from '../../../../containers'
import StorageItemList from './StorageList'
import { useRouter } from 'next/router'
import { UnsplashList } from '../../../../components'
import { RouterParams } from '../../../../types'
import { UNSPLASH_API_KEY } from 'lib/constants'

type StorageDrawerProps = {
	open: boolean
	handleClose: () => void
	handleSubmit: (items: any[]) => void
}

const StorageDrawer: React.FC<StorageDrawerProps> = (props) => {
	const { open, handleClose, handleSubmit } = props

	const router = useRouter()
	const { app_id: appId } = router?.query as RouterParams

	const [tab, setTab] = useState(0)

	const [selected, setSelected] = useState(null)
	const [uploaded, setUploaded] = useState(null)

	const { showAlertError } = useAlerts()

	const { deleteResource } = useStorage({
		appId,
	})

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
		{
			label: 'Browse',
			value: 0,
		},
		{
			label: 'Upload',
			value: 1,
		},
		{
			label: 'Unsplash',
			value: 2,
		},
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
						handleChange={setTab}
						value={tab}
					/>
				</Box>
				<Box sx={sx.content}>
					{tab == 0 && (
						<StorageItemList
							selectedIds={[selected?.id]}
							handleSelect={handleSelect}
						/>
					)}
					{tab == 1 && (
						<>
							{uploaded && (
								<StorageItem
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
								<StorageItem
									item={uploaded}
									handleRemoveItem={handleRemoveItem}
								/>
							)}
							<UnsplashList
								appId={appId}
								onComplete={handleComplete}
								apiKey={String(UNSPLASH_API_KEY)}
							/>
						</>
					)}
				</Box>
			</Box>
		</Drawer>
	)
}

export default StorageDrawer

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
