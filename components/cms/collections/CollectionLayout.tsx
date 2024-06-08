import React from 'react'
import { Stack, Box } from '@mui/material'


type CollectionLayoutProps = { 
  loading?: boolean
  header?: React.ReactNode 
  expandLeft?: boolean
  expandRight?: boolean
  leftPanel?: React.ReactNode
  rightPanel?: React.ReactNode
  children: React.ReactNode
}

const CollectionLayout: React.FC<CollectionLayoutProps> = (props) => {

    const { 
      loading=false,
      expandLeft, 
      expandRight, 
      header,
      leftPanel,
      rightPanel,
      children 
    } = props || {}

    let gridTemplateColumns
    if (expandLeft && expandRight) {
      gridTemplateColumns = '1fr 2fr 1fr'
    } else if (expandLeft) {
      gridTemplateColumns = '2fr 3fr'
    } else if (expandRight) {
      gridTemplateColumns = '3fr 2fr'
    } else {
      gridTemplateColumns = '1fr'
    }

  return(
    <Stack sx={sx.root} direction="column" spacing={1}>
      { header }
      <Box
        sx={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: {
            sm: gridTemplateColumns,
            xs: '1fr',
          },
        }}
      >
        { expandLeft && (
          <Box>{ leftPanel }</Box> 
        )}
        <Box 
          sx={{ 
            ...(loading && sx.loading) 
          }}
        >
          { children }
        </Box>
        { expandRight && (
          <Box>{ rightPanel }</Box> 
        )}
      </Box>
    </Stack>
  )
}

export default CollectionLayout

const sx = {
  root: {
    width: "100%"
  },
  loading: {
		opacity: 0.7,
	},
}