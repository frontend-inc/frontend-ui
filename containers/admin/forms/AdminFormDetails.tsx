import React from 'react'
import { Image, SecondaryButton, PrimaryButton } from '../../../components'
import { Paper, Stack, Box, Typography } from '@mui/material'
import { FormType } from '../../../types'
import { useRouter } from 'next/router'

type AdminFormProps = {
	form: FormType
	handleEdit: () => void
}

const AdminFormDetails: React.FC<AdminFormProps> = (props) => {
	const router = useRouter()
	const { app_id: appId } = router.query || {}

	const { form, handleEdit } = props || {}

	const handleResponses = () => {
		router.push(`/dashboard/${appId}/users/forms/${form.handle}/responses`)
	}

	return (
		<Paper sx={sx.paper}>
			<Stack direction="row" sx={sx.root} spacing={1}>
				<Stack direction="row" spacing={2}>
					<Box sx={sx.image}>
						<Image
							src={form?.image?.url}
							alt={form?.title}
							width={96}
							height={96}
						/>
					</Box>
					<Stack direction="column" spacing={0}>
						<Typography variant="subtitle1" color="text.primary">
							{form?.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{form?.description}
						</Typography>
					</Stack>
				</Stack>
				<Stack direction="row" spacing={1}>
					<SecondaryButton onClick={handleEdit}>Edit</SecondaryButton>
					<PrimaryButton onClick={handleResponses}>
						View Responses
					</PrimaryButton>
				</Stack>
			</Stack>
		</Paper>
	)
}

export default AdminFormDetails

const sx = {
	root: {
		width: '100%',
		justifyContent: 'space-between',
	},
	image: {
		width: 96,
		height: 96,
	},
	paper: {
		p: 2,
	},
}
