import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { FormatQuote } from '@mui/icons-material'
import { StarBorderOutlined, Star } from '@mui/icons-material'
import Rating from '@mui/material/Rating'

type TestimonialProps = {
  author: string
  text: string
  rating: number
  image: string
  height?: number
  width?: number  
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const {
		author,
    text,
    rating=5,
    image='',				
	} = props || {}

	return (
		<Box
			sx={sx.root}
		>
			<Stack 
        spacing={0} 
        sx={ sx.content }
      >
      <Box sx={ sx.testimonial }>
        {rating && (
          <Rating
            readOnly              
            value={parseInt(rating)}
            icon={<Star sx={sx.rating} />}
            emptyIcon={<StarBorderOutlined sx={sx.emptyRating} />}
          />
        )}
        {text && (
          <Typography sx={ sx.text } variant={'subtitle2'} color="text.primary">
            <FormatQuote sx={sx.quote}></FormatQuote>
            {truncate(text, 240)}
          </Typography>      
        )}
      </Box>
			<Stack direction="row" spacing={2} sx={sx.author}>
        <Avatar
          src={image}
          sx={ sx.avatar }
        />
				<Typography sx={sx.author} variant="caption" color="textSecondary">
					{truncate(author)}
				</Typography>
			</Stack>
      </Stack>
		</Box>
	)
}

export default TestimonialCard

const sx = {
	root: {
    width: '300px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
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
	rootBorder: {
		border: '1px solid',
		borderColor: 'grey.300',
		p: 1,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	title: {
		textAlign: 'center',
	},
	label: {
		textAlign: 'center',
	},
	content: {
		justifyContent: {
      sm: 'space-between',
      xs: 'space-around'
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
		alignItems: 'center',
		minHeight: '44px',
	},
  text: {
    textAlign: 'center'
  },
  testimonial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 2
  },
	quote: {
		transform: 'rotateY(180deg)',
	},
  rating: {
		color: 'primary.main',
	},
	emptyRating: {
		color: 'text.secondary',
	},
}
