import React, { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import { BuyNowButton, StripePaymentLink, Actions, Image, SocialButtons } from '../../../components'
import { CollectionShowItemProps } from './CollectionShow'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const Item: React.FC<CollectionShowItemProps> = (props) => {
	const MAX_CHARS = 500

	const { 
    actions, 
    resource, 
    enableBorder, 
    enableEdit, 
    handleEdit, 
    enableLikes,
    enableFavorites,
    enableSharing,
    enableBuyNow,
    enableStripePaymentLink, 
  } =
		props || {}
	const { handle, label, title, image, description } = resource || {}
	const [open, setOpen] = useState(false)

	if (!resource) return null
	return (
    <Stack spacing={2}>
      <Box
        sx={{
          ...sx.root,
          ...(enableBorder && sx.rootBorder),
        }}
      >
        <Stack
          sx={sx.container}
          direction={{ md: 'row', xs: 'column' }}
          spacing={4}
        >
          <Stack 
            spacing={2} 
            direction="column"
            sx={{
              ...sx.leftPanel,
              ...((enableBorder && (enableFavorites || enableSharing || enableLikes)) && sx.leftPanelBorder) 
            }}
          >
            <Box sx={sx.imageContainer}>
              <Image
                src={image?.url}
                alt={title}
                height={360}
                label={label}
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
            spacing={2}
            sx={{
              ...sx.content,
              ...(enableBorder && sx.contentBorder),
            }}
          >
            {(actions || enableEdit) && (
              <Box sx={sx.actions}>
                <Actions
                  actions={buildActions({
                    enableEdit,
                    handleEdit,
                    actions,
                  })}
                  justifyContent="flex-end"
                  resource={flattenDocument(resource)}
                />
              </Box>
            )}
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
        </Stack>
      </Box>     
    </Stack>
	)
}

export default Item

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
			md: 'flex-start',
			xs: 'center',
		},
	},
	image: {
		height: {
			sm: 256,
			xs: 180,
		},
		width: {
			sm: 256,
			xs: 180,
		},
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
		maxWidth: {
			sm: 500,
			xs: '100%',
		},
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
	actions: {
		width: '100%',
	},
	imageContainer: {
    transition: 'all 0.5s ease-in-out',
    borderRadius: 1,
		width: '100%',
		minWidth: 300,
    '&:hover': {
      boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    }
	},
  leftPanel: {
    width: "100%"
  },
  leftPanelBorder: {
    pb: 2
  }
}
