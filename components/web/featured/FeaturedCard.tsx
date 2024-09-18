import React from 'react'
import { useApp } from '../../../hooks'
import { Box, Button, Stack, Typography } from '@mui/material'
import { ExpandableText, Image } from '../..'
import { useRouter } from 'next/router'

export type FeaturedCardProps = {
	label?: string
	title?: string
	description?: string
	image?: string
	buttonText?: string
	href?: string
	flexDirection?: 'row' | 'row-reverse'
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
	enableOverlay?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const FeaturedCard: React.FC<FeaturedCardProps> = (props) => {
	const { clientUrl } = useApp()
	const {
		label,
		title,
		description,
		image = '',
		href,
		buttonText,
		flexDirection = 'row',
		handleClick,
		objectFit = 'cover',
		enableOverlay = false,
		enableBorder = false,
		enableGradient = false,
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
			<Stack 
        direction={{
          sm: flexDirection,
          xs: 'column',
        }}
        alignItems='center'
        spacing={{
          sm: 4,
          xs: 1
        }}				
			>
				<Box sx={sx.image}>
					<Image
						label={label}
						src={image}
						height={320}
						objectFit={objectFit}
						alt={title}
						enableOverlay={enableOverlay}
						enableGradient={enableGradient}
						disableBorderRadius={enableBorder}
					/>
				</Box>				
        <Stack spacing={1} sx={sx.content}>
          <Typography sx={sx.title} variant={'h6'}>
            {title}
          </Typography>
          { description && <ExpandableText text={description} /> }
          {buttonText && (
            <Box sx={sx.buttons}>
              <Button
                size="large"
                variant="contained"
                color="primary"
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

export default FeaturedCard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		borderRadius: 1,
	},
	imageContainer: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 1,
		overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	image: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	buttons: {
		display: 'flex',
		justifyContent: {
			sm: 'flex-start',
			xs: 'center',
		},
		width: '100%',
	},
	content: {
		justifyContent: {
			sm: 'flex-start',
			xs: 'center',
		},
		width: {
			sm: '50%',
			xs: '100%',
		},
		alignItems: 'flex-start',    
    height: '100%',
	},
	textContent: {
		display: 'flex',
		justifyContent: 'flex-start',
		height: '100%',
		width: '100%',
	},
	title: {
		width: '100%',
		color: 'text.primary',
		textAlign: {
			sm: 'left',
			xs: 'center',
		},
	},
	description: {
		width: '100%',
		color: 'text.secondary',
		textAlign: {
			sm: 'left',
			xs: 'center',
		},
	},
}
