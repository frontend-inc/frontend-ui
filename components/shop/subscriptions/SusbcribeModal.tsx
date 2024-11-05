'use client'

import React from 'react'
import { Drawer } from '../..'
import { SubscribeCard } from '../..'
import { useShop } from '../../../hooks'

type SubcribeModalProps = {
  title?: string
  description?: string
}

const SubcribeModal: React.FC<SubcribeModalProps> = (props) => {

  const { 
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
        <SubscribeCard />
      </div>
    </Drawer>
	)
}

export default SubcribeModal
