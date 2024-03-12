import React from 'react'
import {
  Stack,
  Box,
  Typography,
} from '@mui/material'
import { Image } from '../..'
import { DocumentType } from '../../..'

type ArticleProps = {
  resource: DocumentType
}

const Article: React.FC<ArticleProps> = (props) => {

  const { resource } = props || {}
  const { title, image, description, data } = resource || {}
  const { published_at } = data || {}

  return (
    <Stack sx={ sx.root } spacing={6}>      
      <Typography color='text.primary' variant="h3" sx={ sx.title }>
        {title}
      </Typography>
      <Typography color='text.primary' variant="caption" sx={ sx.title }>
        { published_at }
      </Typography>
      <Image 
        src={image?.url}
        alt={title}
        height={400}
      />
      <Box sx={ sx.content }>
        <Typography variant="body1" color='text.primary' sx={ sx.text }>
          {description}
        </Typography>
      </Box>
    </Stack>
  )
}

export default Article

const sx = {
  root: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',    
  },
  title : {
    maxWidth: 500,
    width: '100%',
    textAlign: 'center',
  },
  content: {
    width: '100%',
    maxWidth: {
      sm: 400,
      xs: '100%'
    },
  },
  text: {
    maxWidth: {
      sm: 400,
      xs: '100%'
    },
    width: '100%',
    whiteSpace: 'pre-line',
  }
}