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

