import React from 'react'
import { Avatar, Box, Stack, Button } from '@mui/material'
import { Icon, Heading, Image } from '../../../../components'
import { HeadingProps } from '../../../../types'

type FormCardProps = HeadingProps & {
	image?: string
	buttonText: string
	checkMark?: boolean
	handleClick: () => void
}

const FormCard: React.FC<FormCardProps> = (props) => {
	const {
		title,
		description,
		image,
		checkMark,
		handleClick,
		buttonText = 'Continue',
	} = props

	return (
		<Stack direction="column" sx={sx.root} spacing={2}>
			{checkMark && (
				<Avatar sx={sx.avatar}>
					<Icon name="Check" color="primary.contrasText" />
				</Avatar>
			)}
			{image && <Image src={image} height={320} />}
			<Heading title={title} description={description} textAlign="center" />
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
	avatar: {
		height: 64,
		width: 64,
		bgcolor: 'primary.main',
	},
}
