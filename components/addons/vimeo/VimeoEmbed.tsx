'use client'

import React from 'react'

type VimeoEmbedProps = {
	src: string
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = (props) => {
	const { src } = props

	return (
		<div className="relative overflow-hidden pb-[56.25%] w-full max-w-full">
			<iframe
				src={src}
				className="absolute top-0 left-0 w-full h-full"
				//@ts-ignore
				frameborder="0"
			></iframe>
		</div>
	)
}

export default VimeoEmbed
