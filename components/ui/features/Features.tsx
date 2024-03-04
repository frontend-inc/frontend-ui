import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Feature from './Feature'

type FeaturesProps = {
  title?: string
  features: {
    icon?: any
    title?: string
    description?: string
    filled?: boolean
  }[]
}

const Features: React.FC<FeaturesProps> = (props) => {

  const { title, features } = props || {}

  return(
    <Grid container spacing={0}>
      { title && (
        <Typography color="text.primary" variant="h6" sx={ sx.title }>
          { title }
        </Typography>
      )}
      { features.map((feature, i) => (
        <Grid item xs={6} sm={4} md={4} key={i}>
          <Box sx={ sx.item }>
            <Feature 
              icon={ feature?.icon }
              title={ feature?.title }
              description={ feature?.description }
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default Features 

const sx = {
  title: {
    width: "100%",
    textAlign: 'center',
  },
  item: {
    p: 2
  }
}
