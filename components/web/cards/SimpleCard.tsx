import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Button, Box, Stack, Typography } from '@mui/material'
import { Image } from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'

type SimpleCardProps = {
  item?: any
  buttonText?: string
  href?: string
  handleClick?: () => void
  enableGradient?: boolean
  enableOverlay?: boolean
}

const Card: React.FC<SimpleCardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		item,		
		handleClick,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const { 
    label, 
    title, 
    description, 
    image,
    url,
  } = item || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (url) {
			router.push(`${clientUrl}${url}`)
		}
	}

	return (
		<Stack
			spacing={0}
			sx={{
				...sx.root,
				width: '100%',
				minHeight: 320
			}}
		>
			<Box sx={sx.imageContainer}>
				<Image
					src={image?.url}
					height={240}
					alt={title}
					label={label}
					disableBorderRadius
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					handleClick={handleItemClick}
				/>
			</Box>
			<Stack spacing={0} sx={sx.cardContent}>
				<Box sx={sx.content}>
					<Typography sx={sx.title} color="text.primary" variant="subtitle2">
						{truncate(title)}
					</Typography>
          <Typography sx={sx.title} color="text.secondary" variant="body2">
						{truncate(description)}
					</Typography>
				</Box>
			</Stack>
		</Stack>
	)
}

export default Card

const sx = {
	root: {
		overflow: 'hidden',
		borderRadius: 1,
		width: '100%',
		bgcolor: 'background.default',
		transition: 'box-shadow 0.3s',
		border: '1px solid',
		borderColor: 'divider',
		'&:hover': {
			boxShadow: 2,
		},
	},
	imageContainer: {
		height: 230,
		minHeight: 230,
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	gradient: {
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '50%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	cardHeader: {
		p: 1,
		minHeight: 36,
	},
	cardHeaderBorder: {
		px: 1,
	},
	cardContent: {
		p: 1,
		width: '100%',
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'space-between',
		bgcolor: 'background.default',
	},
	content: {
		height: '100%',
	},
	title: {
		width: '100%',
	},
	user: {},
}
