'use client'

import React from 'react'
import { YouTubeEmbed } from '../../..'

export type FieldYouTubeProps = {
	value: string
	height?: number
	width?: number
	label?: string
}

const FieldYouTube: React.FC<FieldYouTubeProps> = (props) => {
	const { value } = props || {}
	return (
		<div className="w-full roundex-lg flex justify-center items-center bg-black">
			<YouTubeEmbed src={value} />
		</div>
	)
}

export default FieldYouTube
