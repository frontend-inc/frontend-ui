'use client'

import React from 'react'

type YouTubeEmbedProps = {
	src: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = (props) => {
	const { src } = props

	return (
  <div className="relative overflow-hidden pb-[56.25%] w-full max-w-full">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={ src } 
      //@ts-ignore     
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>	
)
}

export default YouTubeEmbed
