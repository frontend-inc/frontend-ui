import React from 'react'
import {
  Box,
  Stack,
  Typography 
} from '@mui/material'

type SimplePageProps = {
  title: string
  body: string
  publishedAt?: string
  html?: boolean
  disablePadding?: boolean
}

const SimplePage: React.FC<SimplePageProps> = (props) => {
  let { title, body, publishedAt, html=false, disablePadding = false } = props || {}
  return (
    <Box 
      sx={{ 
        ...sx.root,
        ...(disablePadding && sx.rootDisablePadding) 
      }}>
      <Stack 
        direction='column' 
        spacing={2}
        sx={ sx.content }
      > 
        <Typography variant="h2" color='text.primary' sx={ sx.title }>{ title }</Typography>
        <Typography variant="caption" sx={ sx.caption }>Last updated { publishedAt }</Typography>
        { html ? (
          <Typography 
            variant="body1" 
            color='text.primary' 
            sx={ sx.text } 
          >
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Typography>
        ):(
          <Typography 
            variant="body1" 
            color='text.primary' 
            sx={ sx.text }>
              { body }
          </Typography>      
        )}      
      </Stack>
    </Box>
  )
}

export default SimplePage 

const sx = {
  root: {
    width: '100%',
    p: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rootDisablePadding: {
    p: 0
  },
  content: {
    width: '100%',
    maxWidth: 800
  },
  title: {
    textAlign: 'center'
  },
  caption: {
    textAlign: 'center'
  },
  text: {
    whiteSpace: 'pre-line'
  }
}