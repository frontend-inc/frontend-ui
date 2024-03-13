import React from 'react'
import {
  Stack,
  Box,
  Grid,
  Typography,
  Button 
} from '@mui/material'
import PriceCard from './PriceCard'
import { PriceType } from '../../..'

type PricesProps = {
  title?: string
  prices: PriceType[]
}

const Prices: React.FC<PricesProps> = (props) => {

  const { 
    title,
    prices 
  } = props 

  return(
    <Box>
      { title && (
      <Typography sx={ sx.title } variant="h5" color="textPrimary">
        { title }
      </Typography>
      )}
      <Stack direction="row" spacing={1}>
        {prices.map((price, index) => (
          <PriceCard 
            key={ index }
            price={ price }
          />
        ))}
      </Stack>
    </Box>
  )
}

export default Prices

const sx = {
  title: {
    width: "100%",
    textAlign: 'center',
    mb: 2
  }
}
