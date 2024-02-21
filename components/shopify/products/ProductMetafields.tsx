import React, { useState, useEffect } from 'react'
import { 
  getMetafieldValue, 
  getMetafieldType, 
  MetafieldIdentifier, 
  Product 
} from 'frontend-shopify'
import {  
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import { RichText } from '../../shopify'
import { Icon } from '../../ui'

const PLAIN_TEXT_TYPES = [
  'single_line_text_field',
  'multi_line_text_field'
]

const RICH_TEXT_TYPES = [
  'rich_text_field'
]

const SUPPORTED_METAFIELD_TYPES = [
  ...PLAIN_TEXT_TYPES,
  ...RICH_TEXT_TYPES
]

type ProductMetafieldsProps = {
  product: Product
  metafields: MetafieldIdentifier[]
}

const ProductMetafields: React.FC<ProductMetafieldsProps> = (props) => {

  const { product, metafields } = props

  return (
    <Box sx={ sx.root }>
      { metafields?.map((metafield, index) => { 

        const type = getMetafieldType(product, metafield.key)
        const value = getMetafieldValue(product, metafield.key)
        if(!value) return null
        if(!SUPPORTED_METAFIELD_TYPES.includes(type)) return null;
        return(        
        <Accordion sx={ sx.accordion } elevation={0}>
          <AccordionSummary expandIcon={<Icon name="ChevronDown" />}>
            <Typography variant="subtitle2">
              { metafield.label }
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            { PLAIN_TEXT_TYPES.includes(type) && (
              <Typography variant="body1" color="textSecondary">
                { value }
              </Typography>
            )}
            { RICH_TEXT_TYPES.includes(type) && (
              <RichText 
                value={ value }
              />
            )}            
          </AccordionDetails>
        </Accordion>        
      )})}
    </Box>    
  )
}

export default ProductMetafields 

const sx = {
  root: {
    my: 2
  },
  accordion: {
    borderTop: '1px solid',
    borderColor: 'divider',
    my: '0px !important'
  }
}