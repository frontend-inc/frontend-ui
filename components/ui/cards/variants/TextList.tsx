import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, CardActionArea, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity, MenuButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'
import { Actions } from '../../..'

const CardList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
    actions,
    item,
		href,
		height = 180,
		textVariant = 'subtitle1',
		handleClick,
		objectFit = 'cover',
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const router = useRouter()

  const {  title, description } = item || {}

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
      <CardActionArea onClick={handleItemClick}>
				<Stack sx={sx.contentArea} direction="row" spacing={1}>
					<Stack
						direction="column"
						spacing={1}
						sx={{
							...sx.content,
							...(enableBorder && sx.contentBorder),
						}}
					>
						<Typography color="textPrimary" variant={textVariant}>
							{truncate(title)}
						</Typography>
						<Typography
							color="text.secondary"
							variant="body2"
							sx={sx.description}
						>
							{truncate(description, 80)}
						</Typography>
					</Stack>          
				</Stack>	
      </CardActionArea>
        <Box sx={ sx.actions }>
          <Actions 
            numVisible={0}
            resource={item}
            actions={actions}
          />					
        </Box>			
		</Box>
	)
}

export default CardList

const sx = {
	root: {
    position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 1,
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
	rootBorder: {
    pl: 2,
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
	},
	image: {
		pr: {
			sm: 2,
			xs: 0,
		},
		mr: {
			sm: 2,
			xs: 0,
		},
		width: {
			sm: 220,
			xs: '100%',
		},
		minWidth: {
			sm: 220,
			xs: '100%',
		},
		height: '100%',
	},
	contentArea: {
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		py: {
			sm: 0,
			xs: 1,
		},
	},
	contentBorder: {
		py: 2,
		px: {
			sm: 0,
			xs: 2,
		},
	},
	description: {
		maxWidth: '320px',
	},
  actions: {
    position: 'absolute',
    top: 10,
    right: 10 
  },
}
