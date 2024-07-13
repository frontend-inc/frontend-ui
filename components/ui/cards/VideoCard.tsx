import React from 'react'
import {
	UserChip,
	FavoriteButton,
	Image,
	Actions,
	TouchableOpacity,
  LightDarkMode, 
  Icon
} from '../..'
import { IconButton, Box } from '@mui/material'
import { buildActions } from '../../../helpers'

type VideoCardProps = {
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
  enableLikes?: boolean
	resource: any
	handleClick: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
	const {
		resource,
    handleClick,
    enableEdit,
    enableDelete,
    handleEdit,    
    handleDelete,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
	} = props || {}

	const { title, image } = resource || {}


	return (
    <LightDarkMode mode='dark'>
			<Box sx={sx.root}>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						src={image?.url}
						height={360}
						alt={title}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				</TouchableOpacity>        
          <IconButton
            sx={sx.playIcon}
            onClick={handleClick}
          >
            <Icon 
              name="Play" 
              color="common.white" 
              size={20} 
            />
          </IconButton>
				<Box sx={sx.actions}>
					{enableFavorites == true && (
						<FavoriteButton handle={resource?.handle} />
					)}
					<Actions
            resource={resource}
						numVisible={0}
						actions={ 
              buildActions({
                enableEdit,
                enableDelete,
                handleEdit,
                handleDelete
            })}
					/>
				</Box>
				<Box sx={sx.userCard}>
					{resource?.user && <UserChip user={resource?.user} />}
				</Box>
			</Box>
    </LightDarkMode>
	)
}

export default VideoCard

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 1,
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: 2,
		},
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
	actions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		top: 10,
		right: 10,
	},
  playIcon: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		top: 'calc(50% - 20px)',
		right: 'calc(50% - 20px)',
    bgcolor: 'rgb(0,0,0,0.5)',
	},
	userCard: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: 10,
		left: 10,
	},
}
