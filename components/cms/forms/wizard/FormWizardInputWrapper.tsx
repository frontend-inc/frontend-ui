import React from 'react'
import { Fade, Typography, Stack } from '@mui/material'

export type FormWizardInputWrapperProps = {
  title: string
  description?: string	  
	fadeIn: boolean
  timeout?: number
  children: React.ReactNode	
}

const FormWizardInputWrapper: React.FC<FormWizardInputWrapperProps> = (props) => {
	const { fadeIn, title, description, children, timeout=350 } = props

	return (
		<Fade in={fadeIn} timeout={timeout}>
			<Stack direction="column" spacing={3}>
				<Stack direction="column" spacing={1}>
					<Typography sx={sx.title} variant="h4" color="text.primary">
						{title}
					</Typography>
					<Typography
						sx={sx.description}
						variant="body1"
						color="text.secondary"
					>
						{description}
					</Typography>
				</Stack>
				{ children }
			</Stack>
		</Fade>
	)
}

export default FormWizardInputWrapper

const sx = {
	title: {
		textAlign: 'left',
		width: '100%',
	},
	description: {
		textAlign: 'left',
		width: '100%',
	},
}
