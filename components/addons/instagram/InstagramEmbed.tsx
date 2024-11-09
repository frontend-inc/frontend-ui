'use client'

import React from 'react'

type InstagramEmbedProps = {
	src: string
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = (props) => {
	const { src } = props

	return (
		<blockquote
			className="instagram-media"
			data-instgrm-permalink={src}
			data-instgrm-version="12"
			style={{ maxWidth: '540px', width: '100%' }}
		>
			<a href={src}></a>
		</blockquote>
	)
}

export default InstagramEmbed
