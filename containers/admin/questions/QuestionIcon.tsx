import React from 'react'
import { Box } from '@mui/material'
import { Icon } from '../../../components'
import { QUESTION_VARIANTS } from '../../../constants'

type QuestionIconProps = {
	size?: number
	variant: string
}

const QuestionIcon: React.FC<QuestionIconProps> = (props) => {
	const { variant } = props

	const question = QUESTION_VARIANTS.find((q) => q.variant === variant)

  if(!question) return null;
	return (
		<Box
			sx={{
				...sx.iconContainer,
				bgcolor: question?.color,
			}}
		>
			<Icon name={question?.icon} />
		</Box>
	)
}

export default QuestionIcon

const sx = {
	iconContainer: {
	  minWidth: '40px',
		minHeight: '40px',
		borderRadius: 1,
		bgcolor: 'primary.main',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}
