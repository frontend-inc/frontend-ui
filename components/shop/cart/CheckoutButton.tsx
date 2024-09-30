import React from 'react'
import { PrimaryButton } from '../..'
import { useCart } from '../../../hooks'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

const CheckoutButton = () => {
	const { loading, cart, checkout } = useCart()

  const router = useRouter()

  const { showAlertError } = useAlerts()

	const handleClick = async () => {
		let currentUrl = window.location.href
		let resp = await checkout({
			success_url: currentUrl,
			cancel_url: currentUrl,
		})    
    if(resp?.errors){
      showAlertError(resp.errors)
    }else{
      let url = resp?.data?.url
      router.push(url)      
    }    
	}

	const cartDisabled = cart?.total_items === 0 ? true : false

	return (
		<PrimaryButton
			fullWidth
			loading={loading}
			onClick={handleClick}
			size="large"
			disabled={cartDisabled}
		>
			Checkout {!cartDisabled && cart?.display_subtotal}
		</PrimaryButton>
	)
}

export default CheckoutButton
