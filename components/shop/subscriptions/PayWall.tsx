'use client'

import React, { useState, useEffect } from 'react'
import { Button, Drawer } from '../../../components'
import { Heading, SubscribeCard } from '../../../components'
import { useShop } from '../../../hooks'

const PayWall: React.FC = () => {

  const [open, setOpen] = useState(false)

  const { subscriptionPrice } = useShop()

	return (
		<div className="flex flex-col space-y-4">
			<Heading
				title="Subscription required"
				description="Please subscribe below to continue"
  
			/>
      <Button 
        label="Subscribe"
        onClick={() => setOpen(true)}
      >
        Subscribe {subscriptionPrice}
      </Button>
      <Drawer 
        title="Subscribe"
        open={open}
        handleClose={() => setOpen(false)}
      >
        <div className="w-full">
          <SubscribeCard />
        </div>
      </Drawer>
		</div>
	)
}

export default PayWall
