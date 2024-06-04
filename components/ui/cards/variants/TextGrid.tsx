import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Link, Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CARD_VERT_HEIGHT, CARD_VERT_WIDTH } from '../../../../constants/index'
import { CardProps } from '../../../../types'
import { FavoriteButton, CardFields, Actions } from '../../..'

const TextGrid: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
    fields=[],
		href,
		handleClick,
		height = CARD_VERT_HEIGHT,
		enableBorder = false,
    enableFavorites = false
	} = props || {}

	const { title, description } = resource || {}

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
          minWidth: `${CARD_VERT_WIDTH}px`,
          minHeight: height + 80,
        }}
      >
        <Stack direction="row" alignItems='flex-end' sx={sx.actions}>
          { enableFavorites && (
            <FavoriteButton
              handle={resource?.handle}
            />
          )}
          <Actions numVisible={0} actions={actions} resource={resource} />
        </Stack>
        <Stack
          spacing={1}
          sx={{
            ...sx.content,
            ...(enableBorder && sx.contentBorder),
          }}
        >                  
          <Link onClick={ handleItemClick }>
            <Typography sx={sx.title} color="text.primary" variant="subtitle1">
              {truncate(title)}
            </Typography>
          </Link>
          <CardFields 
            fields={fields}
            resource={resource}
          />
          <Typography sx={sx.description} color="text.secondary" variant="body1">
            {truncate(description, 200)}
          </Typography>
        </Stack>
      </Stack>
	)
}

export default TextGrid

const sx = {
	root: {
		position: 'relative',
		width: '100%',
	},
	actions: {
		position: 'absolute',
		top: 10,
		right: 10,
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
		p: 1,
		pr: 0,
		width: '100%',
	},
	contentBorder: {
		p: 1,
		pt: 0,
	},
	title: {
		width: '100%',
	},
	description: {
		whiteSpace: 'pre-line',
	},
}
