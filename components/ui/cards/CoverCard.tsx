import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
	UserChip,
	AvgRating,
	DisplayFields,
	Image,	
	TouchableOpacity,
	Actions,
	SocialActions,
  LightDarkMode
} from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'

const CoverVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		displayFields = [],
		href,
		handleClick,
		height = 400,
		enableGradient = false,
		enableUsers = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
    enableLikes = false,
		enableRatings = false,		
	} = props || {}

	const { label, title, image } = resource || {}
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
						height={height}
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
									{enableRatings == true && (
										<AvgRating resource={resource} size="small" />
									)}
									<DisplayFields fields={displayFields} resource={resource} />
									{enableUsers == true && <UserChip user={resource?.user} />}
                  <Stack direction="row" sx={sx.actions}>					
                    <SocialActions 
                      color='common.white'
                      resource={resource} 
                      enableLikes={enableLikes} 
                      enableFavorites={enableFavorites} 
                      enableComments={enableComments}
                    />                    
					          <Actions numVisible={0} resource={resource} actions={actions} />
				          </Stack>
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Stack>				
			</Stack>
		</LightDarkMode>
	)
}

export default CoverVert

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
