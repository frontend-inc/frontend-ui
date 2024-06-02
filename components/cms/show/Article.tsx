import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { BuyNowButton, StripePaymentLink, SocialButtons, Actions, Image } from '../../../components'
import moment from 'moment'
import { CollectionShowItemProps } from './CollectionShow'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const Article: React.FC<CollectionShowItemProps> = (props) => {
	const { actions, resource, enableBorder, enableEdit, handleEdit, enableFavorites, enableLikes, enableSharing, enableBuyNow, enableStripePaymentLink } =
		props || {}
	const { handle, label, title, image, description, data } = resource || {}
	const { published_at } = data || {}
	return (
		<Stack
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
			spacing={6}
		>
			<Stack spacing={3} sx={sx.header}>

      {(actions || enableEdit) && (
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						sx={sx.actions}
						spacing={1}
					>
						<Actions
							actions={buildActions({
								enableEdit,
								handleEdit,
								actions,
							})}
							numVisible={4}
							resource={flattenDocument(resource)}
							justifyContent="center"
						/>
					</Stack>
				)}
				<Typography color="text.primary" variant="h3">
					{title}
				</Typography>        
				{published_at && (
					<Typography color="text.secondary" variant="caption">
						{moment(published_at).format('MMMM D, YYYY')}
					</Typography>
				)}
      { enableBuyNow && (
          <BuyNowButton             
            resource={resource}
            buttonText="Buy Now"              
            justifyContent='center'
          />          
        )}
        { enableStripePaymentLink && (
          <StripePaymentLink 
            resource={resource}
            buttonText="Checkout" 
            justifyContent='center'             
          />          
        )}
				
			</Stack>
			<Image
				src={image?.url}
				alt={title}
				height={400}
				label={label}
				disableBorderRadius={enableBorder}        
			/>
              
        
      <SocialButtons 
        handle={resource?.handle}
        enableLikes={enableLikes}
        enableFavorites={enableFavorites}
        enableSharing={enableSharing}
      />
			<Box sx={sx.content}>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
		</Stack>
	)
}

export default Article

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		py: 2,
		border: '1px solid',
		borderColor: 'divider',
	},
	header: {
		maxWidth: 500,
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
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	actions: {
		justifyContent: 'center',
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
