import React from 'react'
import { Image, PrimaryButton } from '../../../components'
import { Paper, Stack, Box, Typography } from '@mui/material'
import { QuestionType } from '../../../types'

type AdminQuestionProps = {
	question: QuestionType
	handleEdit: () => void
}

const AdminQuestionDetails: React.FC<AdminQuestionProps> = (props) => {
	const { question, handleEdit } = props || {}
	return (
		<Paper sx={sx.paper}>
			<Stack direction="row" sx={sx.root} spacing={1}>
				<Stack direction="row" spacing={2}>
					<Box sx={sx.image}>
						<Image
							src={question?.image?.url}
							alt={question?.title}
							width={96}
							height={96}
						/>
					</Box>
					<Stack direction="column" spacing={0}>
						<Typography variant="subtitle1" color="text.primary">
							{question?.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{question?.description}
						</Typography>
					</Stack>
				</Stack>
				<Stack>
					<PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
				</Stack>
			</Stack>
		</Paper>
	)
}

export default AdminQuestionDetails

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
