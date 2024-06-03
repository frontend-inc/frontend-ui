import React, { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import { BuyNowButton, StripePaymentLink,  SocialButtons, Image, Actions, SocialLink } from '../..'
import { HeroProps } from './Hero'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const Profile: React.FC<HeroProps> = (props) => {
	const MAX_CHARS = 500

	const { 
    actions, 
    resource, 
    enableBorder, 
    enableEdit, 
    handleEdit, 
    enableFavorites, 
    enableLikes, 
    enableSharing, 
    enableBuyNow, 
    enableStripePaymentLink 
  } = props || {}
	const { data } = resource || {}

	const { label, title, image, description } = resource || {}
	const [open, setOpen] = useState(false)
	return (
    <Stack spacing={3} direction='column' justifyContent='center'>
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Stack
				sx={sx.container}
				direction={{ sm: 'row', xs: 'column' }}
				spacing={4}
			>
        <Stack sx={{
          ...sx.leftPanel,
          ...((enableBorder && (enableFavorites || enableSharing || enableLikes)) && sx.leftPanelBorder) 
        }} spacing={2} direction="column">
          <Box sx={sx.imageContainer}>
            <Image
              label={label}
              height={240}
              src={image?.url}
              alt={title}
              disableBorderRadius={enableBorder}            
            />
          </Box>
          <SocialButtons 
            handle={resource?.handle}
            enableLikes={enableLikes}
            enableFavorites={enableFavorites}
            enableSharing={enableSharing}
          />
      </Stack>
				<Stack
					spacing={1}
					sx={{ ...sx.content, ...(enableBorder && sx.contentBorder) }}
				>
					<Typography color="text.primary" variant="h4">
						{title}
					</Typography>
         
          { enableBuyNow && (
            <BuyNowButton 
              resource={resource}
              buttonText="Buy Now"              
            />          
          )}
          { enableStripePaymentLink && (
            <StripePaymentLink 
              resource={resource}
              buttonText="Checkout"              
            />          
          )}
          
					<Box>
						{open ? (
							<Typography variant="body1" color="text.primary" sx={sx.text}>
								{description}
							</Typography>
						) : (
							<Typography variant="body1" color="text.primary" sx={sx.text}>
								{description?.slice(0, MAX_CHARS)}
							</Typography>
						)}
						{description?.length > MAX_CHARS && (
							<Link onClick={() => setOpen(!open)} sx={sx.link}>
								{open ? 'See less' : '... See all'}
							</Link>
						)}
					</Box>
				</Stack>
				{(actions || enableEdit) && (
					<Stack
						sx={sx.actions}
						direction={{ sm: 'row', xs: 'column' }}
						spacing={1}
						p={enableBorder ? 1 : 0}
					>
						<Actions
							actions={buildActions({
								enableEdit,
								handleEdit,
								actions,
							})}
							resource={flattenDocument(resource)}
							justifyContent="flex-end"
						/>
					</Stack>
				)}
			</Stack>
		</Box>
  </Stack>  
	)
}

export default Profile

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	rootBorder: {
		overflow: 'hidden',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			sm: 'flex-start',
			xs: 'center',
		},
	},
  leftPanel: {
    width: "100%",
  },
  leftPanelBorder: {
    pb: 2,
  },
	imageContainer: {
		width: '100%',
		height: '100%',
		maxHeight: {
			sm: 240,
			xs: 240,
		},
		maxWidth: {
			sm: 240,
			xs: '100%',
		},
    transition: 'all 0.4s ease-in-out',
    borderRadius: 1,
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    '&:hover': {
      boxShadow: '0 0 20px rgba(0,0,0,0.4)',
    }
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
	},
	contentBorder: {
		p: 2,
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
	socialUrls: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	actions: {
		width: '100%',
		justifyContent: {
			sm: 'flex-end',
			xs: 'center',
		},
	},
}
