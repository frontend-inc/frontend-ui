import React, { useState } from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import {
	DisplayFields,
	BuyNowButton,
	StripePaymentLink,
	SocialButtons,
	Image,
	Actions,
	AvgRating,
  ExpandableText
} from '../..'
import { HeroProps } from './HeroItem'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const HeroAvatar: React.FC<HeroProps> = (props) => {

	const {
		actions,
		resource,
		displayFields = [],
		enableEdit,
		handleEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
    enableRatings,
		enableBuyNow,
		enableStripePaymentLink,
	} = props || {}
	const { data } = resource || {}

	const { label, title, image, description } = resource || {}
	return (
		<Stack spacing={2} direction="column" justifyContent="center">
      {(actions || enableEdit) && (
        <Stack
          sx={sx.actions}
          direction={{ sm: 'row', xs: 'column' }}
          spacing={1}          
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
			<Box
				sx={ sx.root }
			>
				<Stack
					sx={sx.container}
					direction={{ sm: 'row', xs: 'column' }}
					spacing={4}
				>
					<Stack
						sx={ sx.leftPanel }
						spacing={2}
						direction="column"
					>
						<Box sx={sx.imageContainer}>
              <Avatar
                sx={{
                  ...sx.avatar,								
                  height: 200,
                  width: 200,
                }}
                src={image?.url}
                alt={title}
              >
                <Box />
              </Avatar>
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
						sx={ sx.content }
					>
						<Typography color="text.primary" variant="h4">
							{title}
						</Typography>
            { enableRatings && (
              <AvgRating 
                resource={resource} 
                enableTotal
              />
            )}
						<DisplayFields 
              fields={displayFields} 
              resource={resource} 
            />
						{enableBuyNow && (
							<BuyNowButton resource={resource} buttonText="Buy Now" />
						)}
						{enableStripePaymentLink && (
							<StripePaymentLink resource={resource} buttonText="Checkout" />
						)}
            <ExpandableText 
              text={description}
            />
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}

export default HeroAvatar

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
  avatar: {
		height: '200px',
		width: '200px',
		backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
	},
  gradient: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
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
		width: {
       sm: 200,
       xs: '100%'
    }
	},
	leftPanelBorder: {
		pb: 2,
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
