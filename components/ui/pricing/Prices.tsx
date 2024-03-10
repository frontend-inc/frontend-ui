import React from 'react'
import {
  Stack,
  Box,
  Grid,
  Typography,
  Button 
} from '@mui/material'
import PriceCard from './PriceCard'
import { Price } from '../../..'

type PricesProps = {
  prices: Price[]
}

const Prices: React.FC<PricesProps> = (props) => {

  const { 
    prices 
  } = props 

  return(
    <Box>
      <Typography variant="h6" color="textPrimary">
        Prices
      </Typography>
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
