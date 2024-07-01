import React, { useContext } from 'react'
import { AppContext, ThemeContext, ThemeProvider } from '../../../../context'
import { UserButton, FavoriteButton, Image, Actions, TouchableOpacity } from '../../..'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import { CardProps } from '../../../../types'

const ImageVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		href,
		handleClick,
		objectFit = 'cover',
		height = 320,
		enableGradient = false,
		enableOverlay = false,
    enableUsers = false,
		enableFavorites = false,
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

  const { theme } = useContext(ThemeContext)
  
	return (
    <ThemeProvider 
      muiTheme={ theme } 
      textPrimary='#FFFFFF'
      textSecondary='#FFFFFF' 
    >
		<Box sx={sx.root}>
			<TouchableOpacity handleClick={handleItemClick}>
				<Image
					src={image?.url}
					height={height}
					objectFit={objectFit}
					alt={title}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</TouchableOpacity>
			<Box sx={sx.actions}>
				{enableFavorites == true && <FavoriteButton handle={resource?.handle} />}
				<Actions
					numVisible={0}
					actions={actions}
					resource={resource}
					color={enableOverlay ? 'common.white' : 'text.secondary'}
				/>
			</Box>
      <Box sx={ sx.userCard }>
        { enableUsers == true && (
          <UserButton 
            user={ resource?.user } 
          />
        )}
      </Box>  
		</Box>
    </ThemeProvider>
	)
}

export default ImageVert

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 1,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 2
    }
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
  userCard: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: 10,
		left: 10,
	},
}
