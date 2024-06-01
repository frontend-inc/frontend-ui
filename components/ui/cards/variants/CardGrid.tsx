import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity, FavoriteButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'
import { Actions } from '../../../../components'

const CardGrid: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		href,
		handleClick,
		objectFit = 'cover',
		height = 240,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
    enableFavorites = false
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
		<Stack
			spacing={1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				width: '100%',
				minHeight: height + 80,
			}}
		>
			<Box sx={sx.imageContainer}>
        <Image
          src={image?.url}
          height={height}
          objectFit={objectFit}
          alt={title}
          label={label}
          enableGradient={enableGradient}
          disableBorderRadius={enableBorder}
          enableOverlay={enableOverlay}            
          handleClick={handleItemClick}
          secondaryActions={
            enableFavorites && 
              <FavoriteButton
                handle={resource?.handle}
              />
          }
        />
			</Box>
			<Stack
				spacing={1}
				sx={{
					...sx.content,
					...(enableBorder && sx.contentBorder),
				}}
			>
				<Stack sx={sx.contentArea} direction="row" spacing={0}>
					<Typography sx={sx.title} color="textPrimary" variant="subtitle2">
						{truncate(title)}
					</Typography>
					<Actions 
            numVisible={0} 
            actions={actions} 
            resource={resource} 
          />
				</Stack>
			</Stack>
		</Stack>
	)
}

export default CardGrid

const sx = {
	root: {
		width: '100%',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
		overflow: 'hidden',
	},
	imageContainer: {
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
	content: {
		width: '100%',
		minHeight: '60px',
	},
	contentArea: {
		width: '100%',
	},
	contentBorder: {
		p: 1,
		pt: 0,
	},
	title: {
		width: '100%',
		minHeight: '50px',
	},
	description: {
		maxWidth: '320px',
	},
}
