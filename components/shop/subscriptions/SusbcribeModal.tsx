'use client'

import React from 'react'
import { Drawer } from '../..'
import { SubscribeCard } from '../..'
import { useApp, useShop } from '../../../hooks'

type SubcribeModalProps = {
  title?: string
  description?: string
}

const SubcribeModal: React.FC<SubcribeModalProps> = (props) => {

  const {
    name,
    description 
  } = useApp()

  const { 
    subscriptionPrice,
    subscribeOpen, 
    setSubscribeOpen 
  } = useShop()

  return (
    <Drawer 
      title="Subscribe to continue"
      open={subscribeOpen}
      handleClose={() => setSubscribeOpen(false)}
    >
      <div className="w-full">
        <SubscribeCard 
          price={ subscriptionPrice }
          label="Subscribe"
          title="Upgrade to premium"
          subtitle="To continue please subscribe to our premium plan"                    
        />
      </div>
    </Drawer>
	)
}

export default SubcribeModal
