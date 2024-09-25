import React from 'react'
import {	
	Image,
	Field,
	Label,
} from '../../../components'
import { Box, Stack, Typography } from '@mui/material'
import { DisplayFieldType } from '../../../types'

type ResourceDetailsProps = {
	avatar?: React.ReactNode
	resource: any
	primary: string
	secondary?: string
	label?: string
	image?: string
	fields: DisplayFieldType[]
	direction?: 'row' | 'column'
}

const ResourceDetails: React.FC<ResourceDetailsProps> = (props) => {
	const {
		avatar,
		resource,
		primary,
		secondary,
		label,
		image,
		fields = [],
		direction = 'column',
	} = props || {}

	return (		
    <Stack direction="column" sx={sx.content} spacing={1}>
      { image && (
        <Box sx={sx.image}>
          <Image 
            height={220} 
            src={image} 
            label={ label }
          />
        </Box>
      )}
      {avatar && avatar}
      <Typography variant="h5" color='text.primary'>{primary}</Typography>
      {secondary && (
        <Typography variant="body2" color='text.secondary'>{secondary}</Typography>
      )}
      {fields?.map((field, index) => (
        <Field
          enableBorder
          key={index}
          //@ts-ignore
          field={field}
          resource={resource}
          direction={direction}
        />
      ))}
    </Stack>
	)
}

export default ResourceDetails

const sx = {
	content: {
		width: '100%',
	},
	image: {
		width: '100%',
	},
}
