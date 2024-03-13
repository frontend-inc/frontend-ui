import React, { useState, useEffect } from 'react'
import {
  Avatar,
  Box,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { Image } from '../../../components'
import { DocumentType } from '../../../types'

type HeroProps = {
  resource: DocumentType
}


const Hero: React.FC<HeroProps> = (props) => {

  const MAX_CHARS = 500 

  const { resource } = props || {}
  const { title, image, description } = resource || {}
  const [open, setOpen] = useState(false)

  if(!resource) return null;
  return (
    <Box sx={ sx.root }>
      <Stack sx={ sx.container } direction={{ md: "row", xs: "column" }} spacing={4}>            
          <Image  
            src={image?.url}
            alt={title}
            height={ 256 }
          />    
        <Stack spacing={2} sx={ sx.content }>  
          <Typography color='text.primary' variant="h6">
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
    </Box>
  )
}

export default Hero

const sx = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  container: {
    maxWidth: 800,
    justifyContent: 'flex-start',
    alignItems: {
      md: 'flex-start',    
      xs: 'center',
    }
  },
  image: {
    height: {
      sm: 256,
      xs: 180,
    },
    width: {
      sm: 256,
      xs: 180,
    }
  },
  header : {
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