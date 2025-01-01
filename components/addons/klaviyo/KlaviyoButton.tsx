'use client'

import React from 'react'
import { Button } from '@nextui-org/react'

// Reference:
// https://help.klaviyo.com/hc/en-us/articles/4418052317339
export type KlaviyoButtonProps = {
	formId?: string
	justifyContent?: string
	buttonText?: string
}

const KlaviyoButton: React.FC<KlaviyoButtonProps> = (props) => {
	const { formId, buttonText = 'Subscribe' } = props || {}

	const handleClick = () => {
		// @ts-ignore
		window._klOnsite = window._klOnsite || []
		// @ts-ignore
		window._klOnsite.push(['openForm', 'Tpqv7M'])
	}

	if (!formId) return null
	return (
		<div className="flex flex-row justify-center">
			<Button variant="solid" onPress={handleClick}>
				{buttonText}
			</Button>
		</div>
	)
}

export default KlaviyoButton
