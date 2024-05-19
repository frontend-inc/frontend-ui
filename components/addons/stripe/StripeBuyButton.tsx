import React from 'react'
import { Box } from '@mui/material'

export type StripeBuyButtonProps = {
  buyButtonId: string // Stripe buy button id
  publishableKey: string // stripe publishable key
}

const StripeBuyButton: React.FC<StripeBuyButtonProps> = (props) => {
  const { buyButtonId, publishableKey } = props

  // Script tag included in html head
  //<script async src="https://js.stripe.com/v3/buy-button.js"></script>
  console.log(buyButtonId, publishableKey)
  if(!buyButtonId || !publishableKey) return null;
  return(
    <Box sx={ sx.root}>      
      {/* @ts-ignore */}  
      <stripe-buy-button
        buy-button-id={ buyButtonId }
        publishable-key={ publishableKey }
      />    
    </Box>
  )
}

export default StripeBuyButton

const sx = {
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}