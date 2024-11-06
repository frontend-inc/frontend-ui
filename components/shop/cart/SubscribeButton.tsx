'use client'

import React, { use } from 'react'
import { Button } from '../../core'
import { useCart } from '../../../hooks'
import { cn } from 'frontend-shadcn'

type SusbcribeButtonProps = {
	size?: 'sm' | 'default' | 'lg'
	productId: string | number
	fullWidth?: boolean
  buttonText?: string
	availableForSale?: boolean
  className?: string
}

const SusbcribeButton = (props: SusbcribeButtonProps) => {
	
  const { 
    productId, 
    buttonText='Subscribe', 
    size = 'default', 
    fullWidth,     
    availableForSale,
  } = props
  
  const { showAlertError } = useAlerts()
	const { loading, subscribe } = useCart()

	const handleClick = async () => {
    let currentUrl = window.location.href 
    let stripe = await subscribe(productId, {
      success_url: currentUrl,
      cancel_url: currentUrl, 
    })
    if(stripe?.error){
      showAlertError(stripe?.error)
    }else if(stripe?.data?.url){
      if(window.parent === window){
        window.open(stripe?.data?.url, '_blank')
      }else{
        window.parent.open(stripe?.data?.url, '_self')
      }
    }
	}

	return (
		<Button
			fullWidth={fullWidth}
			loading={loading}
			onClick={handleClick}
			disabled={!availableForSale}
			size={size}
      className={"w-full min-w-[160px]"}
		>
			{ buttonText }
		</Button>
	)
}

export default SusbcribeButton
