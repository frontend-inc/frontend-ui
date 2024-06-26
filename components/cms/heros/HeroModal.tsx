import React from 'react'
import { 
  Hidden, 
  IconButton, 
  Box, 
  Stack, 
  Typography 
} from '@mui/material'
import {
  Modal,
  AvgRating,
  Icon,
	DisplayFields,
	BuyNowButton,
	StripePaymentLink,
	Actions,
	Image,
	SocialButtons,
  ExpandableText,
  UserButton
} from '../..'
import { HeroProps } from './Hero'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

export type HeroModalProps = HeroProps & {
  open: boolean  
  handleClose: () => void
  url: string
}

const HeroModal: React.FC<HeroModalProps> = (props) => {

	const {
    open,
    handleClose,
		actions,
		resource,
    url,
		displayFields = [],
		enableEdit,
		handleEdit,
		enableLikes,
		enableFavorites,
		enableSharing,
    enableRatings,
		enableBuyNow,
		enableStripePaymentLink,
    enableUsers
	} = props || {}

	const { 
    label, 
    title, 
    image, 
    description 
  } = resource || {}

	if (!resource) return null
	return (
    <Modal 
      disableHeader
      disablePadding
      open={open}
      handleClose={ handleClose }
      maxWidth="md"
    >
      <Stack spacing={2}>
        <Box
          sx={ sx.root }
        >
          <Stack
            sx={sx.container}
            direction={{ md: 'row', xs: 'column' }}
            spacing={4}
          >
            { image?.url && (
              <Stack
                spacing={2}
                direction="column"
                sx={ sx.leftPanel }
              >
                <Box sx={sx.imageContainer}>
                  <Image
                    src={image?.url}
                    alt={title}
                    height={620}
                    label={label}
                    disableBorderRadius
                  />
                </Box>
              </Stack>
            )}
            <Stack
              spacing={2}
              sx={ sx.rightPanel }
            >
              <Stack justifyContent='flex-end' alignItems='center' direction="row" spacing={1}>
                {(enableLikes || enableFavorites || enableSharing) && (
                  <SocialButtons
                    justifyContent="flex-end"
                    handle={resource?.handle}
                    enableLikes={enableLikes}
                    enableFavorites={enableFavorites}
                    enableSharing={enableSharing}
                  />
                )}
                {(actions?.length > 0 || enableEdit) && (
                  <Actions
                    numVisible={0}
                    actions={
                      buildActions({
                        enableEdit,
                        handleEdit,
                        actions,
                      })
                    }
                    justifyContent="flex-end"
                    resource={
                      flattenDocument(resource)
                    }
                  />
                )}
                <Hidden smDown>
                  <IconButton 
                    onClick={handleClose}                    
                  >
                    <Icon name="X" color='text.secondary' size={20} />
                  </IconButton>
                </Hidden>
              </Stack>
              <Stack direction="column" spacing={1} sx={ sx.innerContent }>
                <Typography color="text.primary" variant="h4">
                  {title}
                </Typography>
                { enableUsers && (
                  <UserButton 
                    user={ resource?.user }
                  />            
                )}
                { enableRatings == true && (
                  <AvgRating 
                    resource={resource} 
                    enableTotal
                  />
                )}
                <DisplayFields fields={displayFields} resource={resource} />
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
          </Stack>
        </Box>
      </Stack>
      <Hidden smUp>
        <IconButton 
          onClick={handleClose}
          sx={ sx.closeButton }
        >
          <Icon name="X" size={20} color='common.white' />
        </IconButton>
      </Hidden>
    </Modal>
	)
}

export default HeroModal

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
  leftPanel: {
		width: '100%',
    overflowY: 'hidden',
	},
	rightPanel: {
    p: 2,
		width: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    }
	},
  innerContent: {
    pr: 2,
  },
	actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
	},
	imageContainer: {
		transition: 'all 0.5s ease-in-out',
		borderRadius: 1,
		width: '100%',
		minWidth: {
			sm: 420,
			xs: '100%',
		},
	},
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    bgcolor: 'rgb(0,0,0,0.5)',
  },
}
