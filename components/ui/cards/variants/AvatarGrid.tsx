import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Actions, DisplayFields, FavoriteButton, TouchableOpacity } from '../../../../components'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import {
	AVATAR_VERT_HEIGHT,
	AVATAR_VERT_WIDTH,
} from '../../../../constants/index'
import { CardProps } from '../../../../types'

const AvatarGrid: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
    displayFields=[],
		href,
		handleClick,
		height = AVATAR_VERT_HEIGHT,
		width = AVATAR_VERT_WIDTH,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
    enableFavorites = false
	} = props || {}

	const { title, image } = resource || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Stack
			alignItems={'center'}
			spacing={1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				minHeight: height,
			}}
		>
			<Box
				sx={{
          ...sx.avatarContainer,
				}}
			>
				<TouchableOpacity handleClick={handleItemClick}>
					<Avatar
						src={image?.url}
						sx={{
							...sx.avatar,
							...(enableGradient && sx.gradient),
							...(enableOverlay && sx.overlay),
							height,
							width,
						}}
					>
						<Box />
					</Avatar>
				</TouchableOpacity>
			</Box>
			<Stack spacing={1} sx={sx.contentArea}>
				<Stack direction="row" sx={sx.contentArea} spacing={0}>
          <Typography sx={sx.title} color="textPrimary" variant={'subtitle2'}>
            {truncate(title)}
          </Typography>
          <Box sx={sx.actions }>					              
            {enableFavorites && (
              <FavoriteButton
                handle={resource?.handle}
              />
            )}
            <Actions numVisible={0} actions={actions} resource={resource} />
          </Box> 
				</Stack>
			</Stack>
      <DisplayFields
        fields={displayFields}
        resource={resource}
      />	
		</Stack>
	)
}

export default AvatarGrid

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
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
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		p: 1,
		borderRadius: 1,
	},
	title: {
		width: '100%',
		textAlign: 'left',
	},
	label: {
		textAlign: 'center',
	},
	content: {
		width: '100%',
		alignItems: 'center',
	},
	contentArea: {
		width: '100%',
	},
  avatarContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }
}
