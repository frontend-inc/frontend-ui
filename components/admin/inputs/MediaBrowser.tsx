'use client'

import React, { useState } from 'react'
import { useAdminMedia } from '../../../hooks'
import { useAlerts } from '../../../hooks'
import MediaList from './MediaList'
import {
	Modal,
	ButtonTabs,
	MediaUploader,
	UnsplashList,
	BrandfetchInput,
} from '../../../components'
import { Button } from '../../../components'

type MediaBrowserProps = {
	open: boolean
	handleClose: () => void
	handleSubmit: (items: any[]) => void
}

const MediaBrowser: React.FC<MediaBrowserProps> = ({
	open,
	handleClose,
	handleSubmit,
}) => {
	const [tab, setTab] = useState<string>('0')
	const [selected, setSelected] = useState<any>(null)
	const [uploaded, setUploaded] = useState<any>(null)

	const { showAlertError } = useAlerts()
	const { deleteResource } = useAdminMedia()

	const handleTabChange = (value: string) => {
		setTab(value)
	}

	const handleSelect = (resource: any) => {
		setSelected(resource)
	}

	const handleRemove = async (item: any) => {
		await deleteResource(item.id)
		setUploaded(null)
	}

	const handleComplete = async (resource: any) => {
		setUploaded(resource)
		setSelected(resource)
		setTab('0')
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
		{ label: 'Browse', value: '0' },
		{ label: 'Upload', value: '1' },
		{ label: 'Unsplash', value: '2' },
		{ label: 'Logos', value: '3' },
	]

	return (
		<Modal
			open={open}
			handleClose={handleClose}
			title={'Browse Media'}
			buttons={
				<Button variant="default" onClick={handleAttach}>
					Save Media
				</Button>
			}
		>
			<div className="w-full flex flex-col items-center space-y-3 h-full min-h-[420px]">
				<div className="w-full">					
          <ButtonTabs
            fullWidth
            options={OPTIONS}
            handleChange={handleTabChange}
            value={tab}
          />					
				</div>
					{tab === '0' && (
						<MediaList
							selectedIds={[selected?.id]}
							handleSelect={handleSelect}
						/>
					)}
					{tab === '1' && <MediaUploader onComplete={handleComplete} />}
					{tab === '2' && <UnsplashList onComplete={handleComplete} />}
					{tab === '3' && <BrandfetchInput onComplete={handleComplete} />}
				</div>
		</Modal>
	)
}

export default MediaBrowser
