import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import { Label, TouchableOpacity, MenuButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import {
	AVATAR_VERT_HEIGHT,
	AVATAR_VERT_WIDTH,
} from '../../../../constants/index'
import { CardProps } from '../../../../types'

const AvatarVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		title,
		image = '',
		href,
		handleClick,
		height = AVATAR_VERT_HEIGHT,
		width = AVATAR_VERT_WIDTH,
		buttonText,
		textVariant = 'subtitle1',
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,
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
					height: height,
					width,
				}}
			>
				<TouchableOpacity handleClick={handleItemClick}>
					<Avatar
						src={image}
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
			<Stack spacing={1} sx={ sx.contentArea }>
				<Stack direction="row" sx={ sx.contentArea } spacing={0}>
          <Stack sx={ sx.content }>
            <Typography sx={sx.title} color="textPrimary" variant={textVariant}>
              {truncate(title)}
            </Typography>
          </Stack> 
          {(enableEdit || enableDelete) && (
            <MenuButton
              icon='EllipsisVertical'
              handleEdit={ enableEdit ? handleEdit : undefined }
              handleDelete={ enableDelete ? handleDelete : undefined }
            />
          )}
				</Stack>
				{buttonText && (
					<Box>
						<Button
							variant="outlined"
							color="secondary"
							onClick={handleItemClick}
						>
							{buttonText}
						</Button>
					</Box>
				)}
			</Stack>
		</Stack>
	)
}

export default AvatarVert

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
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
		textAlign: 'center',
	},
	label: {
		textAlign: 'center',
	},
  content: {
    width: '100%',
    alignItems: 'center'    
  },
  contentArea: {
    width: '100%'
  }
}
