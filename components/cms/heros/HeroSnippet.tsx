import React from 'react'
import { 
  Paper,
  Box, 
  Stack, 
  Typography 
} from '@mui/material'
import {
  AvgRating,
	DisplayFields,
	Actions,
	Image,
  UserChip,
} from '../..'
import { HeroProps } from './Hero'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const HeroSnippet: React.FC<HeroProps>  = (props) => {

	const {
		resource,
    url,
    actions=[],
    displayFields=[],
    enableRatings,
    enableEdit,
    handleEdit 
	} = props || {}

  const { image, label, title } = resource || {}

	if (!resource) return null
  return(
  <Paper elevation={2} sx={ sx.paper }>
    <Stack direction="row" spacing={2} sx={sx.header}>
      { image?.url && (
        <Box sx={sx.imageContainer}>
          <Image
            label={label}
            src={image?.url}
            alt={title}
            height={240}
          />
        </Box>
      )}
      <Stack spacing={0.5} direction="column" p={2} width='100%'>
        <Typography variant="subtitle1" color='text.primary'>
          { resource?.title }
        </Typography>
        { enableRatings == true && (
          <AvgRating 
            resource={resource} 
            enableTotal
          />
        )}
        <DisplayFields 
          fields={displayFields} 
          resource={resource}
        />   
        <UserChip 
          user={ resource?.user } 
        />
      </Stack>
      <Box justifyContent='flex-end'>
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
      </Box>
    </Stack>
  </Paper>     
  )
}

export default HeroSnippet

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
	},
	imageContainer: {
		borderRadius: 1,
		width: 240,
    minWidth: 240
	},
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    bgcolor: 'rgb(0,0,0,0.5)',
  },
  paper: {
    mb: 2
  }
}

