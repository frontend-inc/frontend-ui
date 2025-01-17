'use client'

import React from 'react'
import { Button } from '@nextui-org/react'

// Reference:
// https://help.klaviyo.com/hc/en-us/articles/4418052317339
export type KlaviyoButtonProps = {
	formId?: string
	justifyContent?: string
	buttonText?: string
	size?: 'sm' | 'md' | 'lg'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	variant?: 'solid' | 'ghost' | 'light'
}

const KlaviyoButton: React.FC<KlaviyoButtonProps> = (props) => {
	const {
		formId,
		size = 'lg',
		color = 'primary',
		variant = 'solid',
		buttonText = 'Subscribe',
	} = props || {}

	const handleClick = () => {
		// @ts-ignore
		window._klOnsite = window._klOnsite || []
		// @ts-ignore
		window._klOnsite.push(['openForm', formId])
	}

	return (
		<div className="flex flex-row justify-center">
			<Button color={color} variant={variant} size={size} onPress={handleClick}>
				{buttonText}
			</Button>
		</div>
	)
}

export default KlaviyoButton
