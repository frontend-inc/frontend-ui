import React, { useContext } from 'react'
import { AppContext } from '../../../context/core'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { TouchableOpacity } from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import {
	TESTIMONIAL_CARD_HEIGHT,
	TESTIMONIAL_AVATAR_HEIGHT,
	TESTIMONIAL_AVATAR_WIDTH,
  TESTIMONIAL_CARD_WIDTH,
} from '../../../constants/index'
import { FormatQuote } from '@mui/icons-material'
import { CardProps } from '../../../types'

const TestimonialCard: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext) as any
	const {
		label,
		title,
		description,
		image = '',
		href,
		handleClick,
		height = TESTIMONIAL_AVATAR_HEIGHT,
		width = TESTIMONIAL_AVATAR_WIDTH,
		textVariant = 'subtitle2',
		enableBorder = false,
		enableGradient = false,
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),				
        minWidth: TESTIMONIAL_CARD_WIDTH
			}}
		>
			<Stack 
        spacing={2} 
        sx={{ 
          ...sx.content,  
          minHeight: TESTIMONIAL_CARD_HEIGHT,        
        }}
      >
				{description && (
					<Box>
						<Typography variant={textVariant} color="text.primary">
							<FormatQuote sx={sx.quote}></FormatQuote>
							{truncate(description, 240)}
						</Typography>
					</Box>
				)}
			<Stack direction="row" spacing={2} sx={sx.author}>
				<Box
					sx={{
						height: height,
						width,
						...(enableGradient && sx.gradient),
					}}
				>
					<TouchableOpacity handleClick={handleItemClick}>
						<Avatar
							src={image}
							sx={{
								height,
								width,
							}}
						/>
					</TouchableOpacity>
				</Box>
				<Typography sx={sx.name} variant="caption" color="textSecondary">
					{truncate(title)}
				</Typography>
			</Stack>
      </Stack>
		</Box>
	)
}

export default TestimonialCard

const sx = {
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gradient: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'grey.300',
		p: 1,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	title: {
		textAlign: 'center',
	},
	label: {
		textAlign: 'center',
	},
	content: {
		justifyContent: {
      sm: 'space-between',
      xs: 'space-around'
    },
    alignItems: 'center',
    height: '100%'
	},
	author: {
		color: 'text.secondary',
		alignItems: 'center',
		minHeight: '44px',
	},
	name: {
		color: 'text.secondary',
	},
	quote: {
		transform: 'rotateY(180deg)',
	},
}
