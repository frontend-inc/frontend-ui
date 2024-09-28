import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Avatar, Image, ExpandableText } from '../..'

type SwipeableTestimonialCardProps = {
	author: string
	text: string
	rating?: number
	image?: string
  avatar?: string
	size?: 'small' | 'large'
}

const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps> = (props) => {
	const { author, avatar, text, image = '' } = props || {}

	return (
		<Stack direction={{ sm: 'row', xs: 'column'}} sx={sx.root}>
			<Stack spacing={1} sx={sx.content}>
				<Box sx={sx.testimonial}>
          {text && (
            <ExpandableText color='text.secondary' text={text} variant="h4" />            
          )}											
				</Box>
        <Stack direction="row" spacing={1} sx={ sx.author }>
          <Avatar src={avatar} size={48} />
          <Typography variant="body2" color="text.secondary">
            &mdash; {author}
          </Typography>
        </Stack>
			</Stack>
      { image && (
      <Box sx={ sx.image }>
        <Image src={image} height={320} disableBorderRadius />
      </Box>
      )}
		</Stack>
	)
}

export default SwipeableTestimonialCard

const sx = {
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
    alignItems: 'flex-start',
		width: '100%',
		minHeight: '320px',        
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
	},
	content: {
    p: 3,
		width: {
      sm: '60%',		
      xs: '100%'
    },
		justifyContent: {
			sm: 'space-between',
			xs: 'space-around',
		},
		alignItems: 'flex-start',
		height: '100%',
	},
  image: {    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: {
      sm: '40%',		
      xs: '100%'
    },
  },
	avatar: {
		height: 48,
		width: 48,
	},
	text: {
		textAlign: 'left',
	},
	testimonial: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
  author: {
    width: '100%',    
    alignItems: 'center'
  }
}
