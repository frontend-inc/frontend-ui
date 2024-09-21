import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { Avatar } from '../../../components'

type TestimonialProps = {
  author: string
  text: string
  rating?: number
  image?: string
  size?: 'small' | 'large'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { author, text, rating = 5, image = '', size = 'small' } = props || {}

	return (
		<Box sx={sx.root}>
			<Stack spacing={1} sx={sx.content}>
				<Box sx={sx.testimonial}>		
          <Stack direction="column" spacing={1} sx={sx.text}>								
            {text && (
              <Typography variant='subtitle2' color="text.primary">
                {truncate(text, 240)}
              </Typography>
            )}
            {author && (
              <Typography
                sx={sx.author}
                variant={size == 'small' ? 'caption' : 'body1'}
                color="text.secondary"
              >
                &mdash; {author}
              </Typography>
            )}
          </Stack>
				</Box>
				<Avatar src={image} size={64} />          
			</Stack>
		</Box>
	)
}

export default TestimonialCard

const sx = {
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
    width: '100%',
    minHeight: '200px'
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		p: 1,
		borderRadius: 1,
	},
	content: {
		width: '100%',
		maxWidth: {
			sm: '600px',
			xs: '100%',
		},
		justifyContent: {
			sm: 'space-between',
			xs: 'space-around',
		},
		alignItems: 'center',
		height: '100%',
	},
	avatar: {
		height: 64,
		width: 64,
	},
	author: {
		color: 'text.secondary',
	},
	text: {
		textAlign: 'center',
	},
	testimonial: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',	
	}
}
