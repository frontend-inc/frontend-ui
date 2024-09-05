import React from 'react'
import { Button, ButtonGroup, Typography, Menu, MenuItem } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useMenu } from '../../../../hooks'
import { useRouter } from 'next/router'
import { RouterParams } from '../../../../types'
import { IconLoading } from '../../../../components'
import { useAdmin } from '../../../../hooks'

type SaveButtonProps = {
	loading: boolean
	document: any
	handleSubmit: () => void
	fullWidth?: boolean
}

const SaveButton: React.FC<SaveButtonProps> = (props) => {
  const { clientUrl } = useAdmin()
	const { loading, document, handleSubmit, fullWidth = false } = props

	const router = useRouter()
	const { app_id: appId, collection_id: collectionId } =
		router?.query as RouterParams

	const handleSave = () => {
		closeMenu()
		handleSubmit()
		router.push(`${clientUrl}/collections/${collectionId}`)
	}

	const handleSaveAndNew = () => {
		closeMenu()
		handleSubmit()
		router.push(`${clientUrl}/collections/${collectionId}/documents/new`)
	}

	const { open, anchorEl, toggleMenu, closeMenu } = useMenu()

	return (
		<>
			<ButtonGroup
				variant="contained"
				color="primary"
				fullWidth
				sx={{
					...sx.saveButton,
					...(loading && sx.loading),
					...(fullWidth && sx.fullWidth),
				}}
			>
				<Button
					endIcon={<IconLoading loading={loading} />}
					sx={sx.button}
					onClick={handleSubmit}
				>
					{document?.id ? 'Save' : 'Create'}
				</Button>
				<Button sx={sx.expandMore} onClick={toggleMenu}>
					<ExpandMore />
				</Button>
			</ButtonGroup>
			<Menu open={open} anchorEl={anchorEl} onClose={closeMenu}>
				<MenuItem onClick={handleSave}>
					<Typography variant="body2" color="textPrimary">
						Save and close
					</Typography>
				</MenuItem>
				<MenuItem onClick={handleSaveAndNew}>
					<Typography variant="body2" color="textPrimary">
						Save and create new
					</Typography>
				</MenuItem>
			</Menu>
		</>
	)
}

export default SaveButton

const sx = {
	button: {
		height: 36,
	},
	saveButton: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	fullWidth: {
		width: '100%',
	},
	expandMore: {
		height: 36,
		width: '30px',
	},
	loading: {},
}
