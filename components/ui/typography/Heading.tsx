import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'
import { Label } from '../../../components'

type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
	textVariant?: TypographyVariantsType
  enableBorder?: boolean
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign = 'left',
		textVariant = 'h6',
    enableBorder = false
	} = props || {}

	if (!title && !description && !label) return null
	return (
		<Stack
			sx={{
				...sx.stack,
        ...(enableBorder && sx.border ),
				alignItems: {
					sm: textAlign === 'center' ? 'center' : 'flex-start',
					xs: 'center',
				},
			}}
			direction={'column'}
			spacing={1}
		>
			{label && (
      <Typography variant="caption" color='text.secondary'>
        { label }
      </Typography>
      )}
			{title && (
				<Typography
					variant={textVariant}
					color="text.primary"
					sx={{
						...sx.title,
						textAlign: textAlign,
					}}
				>
					{title}
				</Typography>
			)}
			{description && (
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{
						...sx.description,
						textAlign: {
							sm: textAlign,
							xs: 'center',
						},
					}}
				>
					{description}
				</Typography>
			)}
		</Stack>
	)
}

export default Heading

const sx = {
	stack: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
  border: {
    py: 2,
    borderBottom: '1px solid',
    borderColor: 'divider'
  },
	title: {
		width: '100%',
	},
	description: {
		width: '100%',
	},
}
