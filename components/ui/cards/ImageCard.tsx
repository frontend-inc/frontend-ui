import React from 'react'
import {
	UserChip,
	FavoriteButton,
	Image,
	Actions,
	TouchableOpacity,
	LightDarkMode,
} from '../../../components'
import { Box } from '@mui/material'
import { buildActions } from '../../../helpers'

type ImageCardProps = {
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

const ImageCard: React.FC<ImageCardProps> = (props) => {
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
		<LightDarkMode mode="dark">
			<Box sx={sx.root}>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						src={image?.url}
						height={260}
						alt={title}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				</TouchableOpacity>
				<Box sx={sx.buttons}>
					{enableFavorites == true && (
						<FavoriteButton handle={resource?.handle} />
					)}
					<Actions
						resource={resource}
						numVisible={0}
						buttons={buildActions({
							enableEdit,
							enableDelete,
							handleEdit,
							handleDelete,
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

export default ImageCard

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
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		top: 10,
		right: 10,
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
