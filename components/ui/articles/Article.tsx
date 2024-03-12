import React from 'react'
import {
  Stack,
  Box,
  Typography,
} from '@mui/material'
import { Image } from 'frontend-ui/components'

type ArticleProps = {
  resource: {
    title: string  
    image: {
      url: string
    }
    description: string
  }  
}

const Article: React.FC<ArticleProps> = (props) => {

  const { resource } = props || {}
  const { title, image, description } = resource || {}

  return (
    <Stack sx={ sx.root } spacing={2}>      
      <Typography color='text.primary' variant="h5" sx={ sx.title }>
        {title}
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