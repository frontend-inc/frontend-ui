import React from 'react'
import {
  Stack,
  Box,
  Button,
  Divider,
  Typography,  
} from '@mui/material'
import { PriceType } from '../../..'
import { useRouter } from 'next/router'

type PriceCardProps = {
  price: PriceType
}

const PriceCard: React.FC<PriceCardProps> = (props) => {

  const router = useRouter()

  const { 
    price
  } = props 

  const handleClick = () => {
    if(price?.url){
      router.push(price.url)
    }
  }

  return(
    <Box sx={ sx.root }>
      <Stack sx={ sx.content } direction="column" spacing={1}>
        <Typography variant="subtitle1" color="text.primary">
          { price.title }
        </Typography>
        <Typography variant="h6" color="text.primary">
          { price.price }
        </Typography>
        <Divider />
         <Typography variant="body1" color="text.primary" sx={ sx.features }> 
          { price.features }
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ sx.nonFeatures }> 
          { price.disabledFeatures }
        </Typography>
      </Stack>
      <Button 
        onClick={ handleClick }
        variant='contained'
        color='primary'
        fullWidth
      >
        { price.buttonText }
      </Button>      
    </Box>
  )
}

export default PriceCard

const sx= { 
  root: {
    width: "100%",
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: theme => `${theme.shape.borderRadius}px`,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)'
    }
  },
  content: {
    minHeight: 300
  },
  features: {    
    whiteSpace: 'pre-line',
    color: 'text.primary',
    mb: 0
  },
  nonFeatures: {    
    mt: 0,
    whiteSpace: 'pre-line',
    textDecoration: 'line-through',
    color: 'text.secondary'
  }

}
