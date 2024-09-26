import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Container, Image } from '../..'

export type SpotlightProps = {
	label?: string
	image?: string
  logos?: string[]
	primary?: string | React.ReactNode
	secondary?: React.ReactNode 
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	children?: React.ReactNode
	slots?: {
		image?: any
		content?: any
	}
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
    logos=[],
		secondaryAction,
		children,
    slots={
      image: {}
    }
	} = props || {}

	return (
    <Box sx={ sx.gradient }>
      <Container maxWidth="md">
        <Stack sx={sx.root} spacing={4}>
          {actions}
          <Typography color="text.primary" variant="h1" sx={ sx.header }>
            {primary}
          </Typography>
          {secondaryAction}
          {secondary}
          {children}
          <Box sx={sx.imageContainer}>
            <Image               
              src={image} 
              alt={primary} 
              height={500} 
              label={label}  
              objectFit='contain'
              { ...slots.image }           
            />
          </Box>
        </Stack>
      </Container>
    </Box>
	)
}

export default Spotlight

const sx = {
	root: {
    px: 2,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		pb: 2,
	},
	header: {
		maxWidth: 600,
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
	buttons: {
		justifyContent: 'center',
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	imageContainer: {
		width: '100%',
		borderRadius: 1,
    boxShadow: 6,
	},
  gradient: { 
    pt: 8, 
    pb: 0,
    height: 'auto',
    width: '100%',    
	  background: theme => `radial-gradient(ellipse 100% 95% at center bottom, ${theme.palette.primary.main}, rgba(0, 0, 0, 1))`
	},
}
