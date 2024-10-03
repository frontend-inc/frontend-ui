import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { Avatar, ExpandableText } from '../../../components'

type TestimonialProps = {
	author: string
	text: string
	rating?: number
	image?: string
	size?: 'small' | 'large'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { author, text, image = '' } = props || {}

	return (
		<Box sx={sx.root}>
			<Stack spacing={1} sx={sx.content}>
				<Box sx={sx.testimonial}>
          {text && (
            <ExpandableText variant="subtitle1" color='text.secondary' text={`"${text}"`} />            
          )}											
				</Box>
        <Stack direction="row" spacing={1} sx={ sx.author }>
          <Avatar src={image} size={48} />
          <Typography variant="body2" color="text.secondary">
            &mdash; {author}
          </Typography>
        </Stack>
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
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		width: '100%',
		minHeight: '320px',        
    p: 2,
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
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
		alignItems: 'flex-start',
		height: '100%',
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
