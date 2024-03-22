import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Feature from './Feature'
import { Placeholder } from '../..'

type FeaturesProps = {
	title?: string
	items: {
		icon?: any
		title?: string
		description?: string
	}[]
}

const Features: React.FC<FeaturesProps> = (props) => {
	const { title, items } = props || {}

	return (
    <>
      <Grid container spacing={0}>
        {title && (
          <Typography color="text.primary" variant="h5" sx={sx.title}>
            {title}
          </Typography>
        )}
        {items.map((item, i) => (
          <Grid item xs={12} sm={4} md={4} key={i}>
            <Box sx={sx.item}>
              <Feature
                icon={item?.icon}
                title={item?.title}
                description={item?.description}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      { items?.length == 0 && (
        <Placeholder 
          icon='Search'
          title="No content"
          description="Your content will appear here."
        />      
      )}
    </>
	)
}

export default Features

const sx = {
	title: {
		width: '100%',
		textAlign: 'center',
	},
	item: {
		p: 2,
	},
}
