import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
	Image,	
	TouchableOpacity,
  LightDarkMode
} from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'

export type CardProps = {
  collection?: any
  href?: string
  handleClick?: () => void  
  enableGradient?: boolean
  enableOverlay?: boolean  
}

const CollectionCard: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		collection,
		href,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const { label, title, image } = collection || {}
	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<LightDarkMode mode='dark'>
			<Stack spacing={1} sx={sx.root}>
				<TouchableOpacity handleClick={handleItemClick}>
					<Image
						label={label}
						src={image?.url}
						height={400}
						alt={title}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				</TouchableOpacity>
				<Stack spacing={1} sx={sx.cover}>
					<Stack
						sx={sx.fullWidth}
						spacing={1}
						direction={'row'}
						alignItems="center"
					>
						<Box sx={sx.contentContainer}>
							<Stack sx={sx.content} direction="column" spacing={0}>
								<Box sx={sx.fullWidth}>
									<Typography color="text.primary" variant='subtitle2'>
										{truncate(title, 60)}
									</Typography>									
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Stack>				
			</Stack>
		</LightDarkMode>
	)
}

export default CollectionCard

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		width: '100%',
		borderRadius: 1,
	},
	cover: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: 0,
		zIndex: 1,
		p: 1,
	},
	description: {
		maxWidth: '320px',
	},
	button: {
		bgcolor: 'common.white',
		color: 'common.black',
		'&:hover': {
			color: 'common.black',
			bgcolor: 'common.white',
			opacity: 0.9,
		},
	},
	fullWidth: {
		width: '100%',
	},
	contentContainer: {
		px: 0,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
}
