import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, Icon, TouchableOpacity, MenuButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'

const CoverList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		icon,
		title,
		image = '',
		href,
		handleClick,
		buttonText,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = 240,
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
		<Stack sx={sx.root} spacing={1}>
			<TouchableOpacity handleClick={handleItemClick}>
				<Image
					label={label}
					src={image}
					objectFit={objectFit}
					alt={title}
					height={height}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</TouchableOpacity>
			<Stack spacing={1} sx={sx.cover}>
				<Stack spacing={1} direction={'row'} alignItems="center">
					{icon && (
						<Box>
							<Icon size={20} name={icon} color="common.white" />
						</Box>
					)}
					<Box sx={sx.content}>
						<Typography color="common.white" variant={textVariant}>
							{truncate(title, 40)}
						</Typography>
						{label && (
							<Typography color="common.white" variant="caption">
								{label}
							</Typography>
						)}
					</Box>
          {(enableEdit || enableDelete) && (
            <MenuButton
              icon='EllipsisVertical'
              color='common.white'
              handleEdit={ enableEdit ? handleEdit : undefined }
              handleDelete={ enableDelete ? handleDelete : undefined }
            />
          )}
				</Stack>
				{buttonText && (
					<Box>
						<Button
							variant="contained"
							sx={sx.button}
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

export default CoverList

const sx = {
	root: {
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 1,
	},
	cover: {
    width: '100%',
		position: 'absolute',
    left: 0,
    bottom: 0,
		zIndex: 1,
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
	content: {
    width: '100%',
    p: 2,    
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
}
