import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Container, Image, SpotlightList } from '../..'
import { ButtonType } from '../../../types'

export type SpotlightProps = {
  label?: string
  title?: string
  description?: string
  image?: string
  logos?: string[]
  style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight'
  buttons?: ButtonType[]
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
	const {
		image,
		label,
		title,
		description,
		buttons=[],
    logos=[],
	} = props || {}

	return (
    <SpotlightList 
      label={label}
      primary={title }
      secondary={ 
        <Typography variant="subtitle1" color="text.secondary">
          { description }
        </Typography>
      }
      image={ image }
    />
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
