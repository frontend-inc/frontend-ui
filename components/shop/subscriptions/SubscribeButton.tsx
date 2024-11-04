'use client'

import React from 'react'
import { Button } from '../..'
import { useShop } from '../../../hooks'

const SubscribeButton: React.FC = () => {

  const { subscribeOpen, setSubscribeOpen, subscriptionPrice } = useShop()

  const handleClick = () => {
    setSubscribeOpen(!subscribeOpen)
  }

	return (
    <Button 
      label="Subscribe"
      onClick={handleClick}
    >
      Subscribe {subscriptionPrice}
    </Button>
	)
}

export default SubscribeButton
