'use client'

import React from 'react'
import Script from 'next/script'

export type GorgiasContactFormProps = {
	src?: string
	gorgiasContactFormSrc?: string
}

const GorgiasContactForm: React.FC<GorgiasContactFormProps> = (props) => {
	const { src, gorgiasContactFormSrc } = props || {}
	if (!src) return null
	return (
		<div>
			<Script strategy="beforeInteractive" src={gorgiasContactFormSrc} />
			<iframe src={src} />
		</div>
	)
}

export default GorgiasContactForm
