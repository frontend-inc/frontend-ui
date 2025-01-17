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
		<>
			<Script strategy="beforeInteractive" src={gorgiasContactFormSrc} />
			<div className="flex w-full h-full items-center justify-center">
				<iframe src={src} width="900" height="800" />
			</div>
		</>
	)
}

export default GorgiasContactForm
