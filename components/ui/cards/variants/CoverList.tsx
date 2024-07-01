import React, { useContext } from 'react'
import { AppContext, ThemeContext, ThemeProvider } from '../../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
  UserButton,
  AvgRating,
	DisplayFields,
	FavoriteButton,
	Image,
	Icon,
	TouchableOpacity,
	Actions,
} from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'

const CoverList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		resource,
		displayFields = [],
		actions,
		icon,
		href,
		handleClick,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = 240,
    enableUsers = false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
    enableRatings = false
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

  const { theme } = useContext(ThemeContext)

	return (
    <ThemeProvider 
      muiTheme={ theme } 
      textPrimary='#FFFFFF'
      textSecondary='#FFFFFF' 
    >
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
                <Icon size={20} name={icon} />
              </Box>
            )}
            <Box sx={sx.content}>
              <Typography variant={textVariant}>
                {truncate(title, 40)}
              </Typography>
              {enableRatings == true && (
                <AvgRating resource={resource} size="small" />
              )}
              <DisplayFields
                fields={displayFields}
                resource={resource}
              />
              { enableUsers == true && (
                <UserButton user={ resource?.user } />
              )}
            </Box>
          </Stack>
        </Stack>
        <Box sx={sx.actions}>
          {enableFavorites == true && <FavoriteButton handle={resource?.handle} />}
          <Actions
            numVisible={0}
            resource={resource}
            actions={actions}            
          />
        </Box>
      </Stack>
    </ThemeProvider>
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
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 2
    }
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
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		top: 0,
		right: 10,
	},
}
