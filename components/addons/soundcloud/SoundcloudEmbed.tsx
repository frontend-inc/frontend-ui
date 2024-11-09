'use client'

import React from 'react'

type SoundcloudEmbedProps = {
	src: string
}

const SoundcloudEmbed: React.FC<SoundcloudEmbedProps> = (props) => {
	const { src } = props

	return (
		<iframe
			width="100%"
			height="166"
			//@ts-ignore
			frameborder="no"
			allow="autoplay"
			src={`${src}&color=%23ff5500&inverse=false&auto_play=false&show_user=true`}
		></iframe>
	)
}

export default SoundcloudEmbed
