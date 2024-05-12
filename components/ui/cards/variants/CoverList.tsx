import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, Icon, TouchableOpacity, Actions } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'

const CoverList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {				
		item,
    actions,
    icon,
		href,
		handleClick,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = 240,
		enableGradient = false,
		enableOverlay = false,		
	} = props || {}

  const { label, title, image } = item || {}
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
					src={image?.url}
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
				</Stack>				
			</Stack>
      <Box sx={ sx.actions }>
        <Actions 
          numVisible={0}
          resource={item}
          actions={actions}
          color={ enableOverlay ? 'common.white' : 'text.secondary' }
        />					
      </Box>
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
    p: 1,
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
    p: 1,
		width: '100%',
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
  actions: {
    position: 'absolute',
    top: 0,
    right: 10
  }
}
