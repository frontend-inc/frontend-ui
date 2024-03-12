import React, { useState, useEffect } from 'react'
import {
  Avatar,
  Box,
  Link,
  Stack,
  Container,
  Typography,
  Collapse,
} from '@mui/material'
import { Image } from '../..'
import { DocumentType } from '../../../types'

type PersonProps = {
  resource: DocumentType
}


const Person: React.FC<PersonProps> = (props) => {

  const MAX_CHARS = 500 

  const { resource } = props || {}
  const { title, image, description } = resource || {}
  const [open, setOpen] = useState(false)

  return (
    <Container maxWidth="sm">
      <Stack sx={ sx.root } direction="row" spacing={4}>    
        <Avatar  
          src={image?.url}
          alt={title}
          sx={ sx.avatar }
        />
        <Stack spacing={2} sx={ sx.content }>  
          <Typography color='text.primary' variant="subtitle1">
            {title}
          </Typography>   
          <Box>
            { open ? (
              <Typography variant="body1" color='text.primary' sx={ sx.text }>
                {description}
              </Typography>          
            ):(
              <Typography variant="body1" color='text.primary' sx={ sx.text }>
                {description?.slice(0, MAX_CHARS)}
              </Typography>          
            )}          
          { description?.length > MAX_CHARS && (
            <Link
              onClick={() => setOpen(!open)}
              sx={ sx.link }
            >
              {open ? 'See less' : '... See all'}
            </Link> 
          )}
          </Box>       
        </Stack>      
      </Stack>
    </Container>
  )
}

export default Person

const sx = {
  root: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',    
  },
  avatar: {
    height: 256,
    width: 256
  },
  header : {
    maxWidth: 500,
    width: '100%',
    textAlign: 'center',
  },
  content: {
    width: '100%',
    maxWidth: {
      sm: 500,
      xs: '100%'
    },
  },
  text: {
    width: '100%',
    whiteSpace: 'pre-line',
  },
  caption: {
    color: 'text.secondary',
  },
  link: {
    cursor: 'pointer',
    color: 'text.secondary'
  }
}