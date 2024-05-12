import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { Image } from '../../../../components'

type FormCardProps = {
	title: string
	description: string
	image: string
	buttonText: string
	handleClick: () => void
}

const FormCard: React.FC<FormCardProps> = (props) => {
	const {
		title,
		description,
		image,
		handleClick,
		buttonText = 'Continue',
	} = props

	return (
		<Stack direction="column" sx={sx.root} spacing={2}>
			{image && <Image src={image} height={400} />}
			{title && (
				<Typography variant="h4" color="text.primary">
					{title}
				</Typography>
			)}
			{description && (
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
			)}
			<Box>
				<Button onClick={handleClick} variant="contained" color="primary">
					{buttonText}
				</Button>
			</Box>
		</Stack>
	)
}

export default FormCard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
}
