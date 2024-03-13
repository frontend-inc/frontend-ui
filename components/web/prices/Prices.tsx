import React from 'react'
import {
  Stack,
} from '@mui/material'
import PriceCard from './PriceCard'
import { PriceType } from '../../..'
import { Heading } from '../../../components'

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
    <Stack spacing={2}>
      { title && (
        <Heading 
          title={title } 
          textAlign='center'
        />      
      )}
      <Stack direction="row" spacing={1}>
        {prices.map((price, index) => (
          <PriceCard 
            key={ index }
            price={ price }
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Prices
