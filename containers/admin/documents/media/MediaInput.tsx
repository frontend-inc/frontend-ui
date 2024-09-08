import React, { useState } from 'react'
import { Stack, Box, Button } from '@mui/material'
import MediaImage from './MediaImage'
import MediaBrowser from './MediaBrowser'
import { Search } from 'lucide-react'
import { ImageType } from '../../../../types'

type MediaInputProps = {
	name: string
	value: ImageType
	handleAddAttachment: (field: string, id: number) => void
	handleRemoveAttachment: (field: string) => void
}

const MediaInput: React.FC<MediaInputProps> = (props) => {
	
  const { 
    name, 
    value, 
    handleAddAttachment, 
    handleRemoveAttachment 
  } = props

	const [open, setOpen] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)

	const handleSubmit = async (resources) => {
		const resourceIds = resources.map((res) => res?.id)
		await handleAddAttachment(name, resourceIds[0])
		setOpen(false)
	}

	const handleRemove = async () => {
		await handleRemoveAttachment(name)
		setOpen(false)
	}

	const handleAddClick = () => {
		setOpenEdit(true)
	}

	return (
		<Stack spacing={1}>
			<MediaImage image={value} handleRemove={handleRemove} />
			<Box sx={sx.buttons}>
				<Button
					color="secondary"
					variant="contained"
					onClick={handleAddClick}
					startIcon={<Search />}
				>
					Browse
				</Button>
			</Box>
			<MediaBrowser
				open={openEdit}
				handleClose={() => setOpenEdit(false)}
				handleSubmit={handleSubmit}
			/>
		</Stack>
	)
}

export default MediaInput

const sx = {
	root: {
		height: '100%',
	},
	icon: {
		color: 'icon',
	},
	content: {
		overflow: 'hidden',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		gap: '5px',
	},
	emptyImage: {
		borderRadius: 1,
		width: '100px',
		border: '1px solid',
		borderColor: 'divider',
		overflow: 'hidden',
	},
}
