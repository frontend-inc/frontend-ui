import React from 'react'
import { Stack, Box, alpha, Typography } from '@mui/material'
import Rating from '@mui/material/Rating'
import { InputPropsType, SyntheticEventType } from '../../../types'
import { StarBorderOutlined, Star } from '@mui/icons-material'

type RatingInputProps = InputPropsType & {
	name?: string
	readOnly?: boolean
	disableBorder?: boolean
	size?: 'small' | 'medium' | 'large'
	label?: string
	value?: number
  direction?: 'row' | 'column'
	handleChange?: (e: SyntheticEventType) => void
}

const RatingInput: React.FC<RatingInputProps> = (props) => {
	const {
		label,
		value,
		name,
		handleChange,
		disableBorder = false,
		readOnly = false,
    direction="column",
		size,
	} = props

	const onChange = (event, value) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
    <Stack
      sx={{
        ...sx.stack,
        ...(direction == 'row' && sx.stackVertical),
      }}
      direction={direction}
      spacing={1}
    >
			{label && (
				<Typography sx={ sx.label } variant="caption" color="textSecondary">
					{label}
				</Typography>
			)}
			<Box
				sx={{
					...sx.input,
					...(!disableBorder && sx.border),
				}}
			>
				<Rating
					name={name}
					readOnly={readOnly}
					onChange={onChange}
					size={size}
					value={parseInt(value)}
					icon={<Star sx={sx.rating} />}
					emptyIcon={<StarBorderOutlined sx={sx.emptyRating} />}
				/>
			</Box>
		</Stack>
	)
}

export default RatingInput

const sx = {
	input: {
    width: '100%',
		fontSize: 15,
		'&:focus': {
			boxShadow: `${alpha('#999999', 0.25)} 0 0 0 0.2rem`,
			borderColor: 'primary.light',
		},
	},
	rating: {
		color: 'primary.main',
	},
	emptyRating: {
		color: 'text.secondary',
	},
	border: {		
    p: 1,
    pb: 0.5,
		bgcolor: 'background.paper',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '1px solid',
		borderColor: 'divider',
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
	},
  label: {
    width: '100px',
    mb: 0
  },
  stack: {
    width: '100%',
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
}
