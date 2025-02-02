'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { useSubscribe } from '../../../hooks'
import { toast } from 'sonner'

type SusbcribeButtonProps = {
	size?: 'sm' | 'md' | 'lg'
	productId: string | number
	fullWidth?: boolean
	buttonText?: string
	availableForSale?: boolean
	price?: string
	className?: string
}

const SusbcribeButton = (props: SusbcribeButtonProps) => {
	const {
		productId,
		buttonText = 'Subscribe',
		size = 'md',
		fullWidth,
		availableForSale,
	} = props

	const { loading, subscribe } = useSubscribe()

	const handleClick = async () => {
		let currentUrl = window.location.href
		let stripe = (await subscribe(productId, {
			success_url: currentUrl,
			cancel_url: currentUrl,
		})) as any
		if (stripe?.error) {
			toast.error(stripe?.error)
		} else if (stripe?.data?.url) {
			if (window.parent === window) {
				window.open(stripe?.data?.url, '_blank')
			} else {
				window.parent.open(stripe?.data?.url, '_self')
			}
		}
	}

	return (
		<Button
			fullWidth={fullWidth}
			isLoading={loading}
			onPress={handleClick}
			disabled={!availableForSale}
			size={size}
			className={'min-w-[160px]'}
		>
			{buttonText}
		</Button>
	)
}

export default SusbcribeButton
