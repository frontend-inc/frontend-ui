'use client'

import React, { useState } from 'react'
import { Sheet, ButtonTabs } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { MediaUploader } from '../../../components'
import { UnsplashList } from '../../../components'

const AdminMediaForm: React.FC<ResourceFormProps> = (props) => {
	const { open, handleClose, handleReload } = props || {}

	const [tab, setTab] = useState('upload')
	const handleChange = (newValue: string) => {
		setTab(newValue)
	}

	const handleComplete = async () => {
		handleClose()
		handleReload()
	}

	return (
		<Sheet open={open} handleClose={handleClose} title="Upload an Asset">
			<div className="mb-2">
				<ButtonTabs
					fullWidth
					options={[
						{ label: 'Upload', value: 'upload' },
						{ label: 'Unsplash', value: 'unsplash' },
					]}
					value={tab}
					handleChange={handleChange}
				/>
			</div>
			{tab == 'upload' && <MediaUploader onComplete={handleComplete} />}
			{tab == 'unsplash' && <UnsplashList onComplete={handleComplete} />}
		</Sheet>
	)
}

export default AdminMediaForm
