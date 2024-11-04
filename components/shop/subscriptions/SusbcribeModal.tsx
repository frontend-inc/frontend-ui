'use client'

import React from 'react'
import { Drawer } from '../..'
import { Heading, SubscriptionTable } from '../..'
import { useShop } from '../../../hooks'

type SubcribeModalProps = {
  title?: string
  description?: string
}

const SubcribeModal: React.FC<SubcribeModalProps> = (props) => {

  const { subscribeOpen, setSubscribeOpen } = useShop()

  const { 
    title="Become a Member",
    description="Please subscribe below to continue" 
  } = props || {}
	
  return (
    <Drawer 
      title="Subscribe"
      open={subscribeOpen}
      handleClose={() => setSubscribeOpen(false)}
    >
      <div className="w-full">
        <Heading
          title={title }
          description={ description}      
        />
        <SubscriptionTable />
      </div>
    </Drawer>
	)
}

export default SubcribeModal
