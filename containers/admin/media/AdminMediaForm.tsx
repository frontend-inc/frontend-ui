import React, { useState } from 'react'
import { Drawer, ButtonTabs } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { Box } from '@mui/material'
import MediaUploader from './MediaUploader'
import { UnsplashList } from '../../../components'

type AdminMediaFormProps = ResourceFormProps & {
  unsplashApiKey: string
}

const AdminMediaForm: React.FC<AdminMediaFormProps> = (props) => {
  const { open, handleClose, unsplashApiKey, handleReload } = props || {}
	
  const [tab, setTab ] = useState(0)
  const handleChange = (newValue: number) => {
		setTab(newValue)
	}

  const handleComplete = async () => {    
    handleClose()
    handleReload()
  }

	return (
		<Drawer open={open} handleClose={handleClose} title="Upload an Asset">
			<Box sx={sx.tabs}>
				<ButtonTabs
					options={[
						{ label: 'Upload', value: 0 },
						{ label: 'Unsplash', value: 1 },
					]}
					value={tab}
					handleChange={handleChange}
				/>
			</Box>
			{tab == 0 && (
        <MediaUploader 
          onComplete={handleComplete} 
        />
      )}
			{tab == 1 && (
				<UnsplashList
					onComplete={handleComplete}
					apiKey={unsplashApiKey}
				/>
			)}
		</Drawer>
	)
}

export default AdminMediaForm

const sx = {
	tabs: {
		mb: 2,
	},
}
