'use client'

import React, { useState } from 'react'
import { Image, VideoModal, Alert } from '../..'
import { BlurFade } from '../..'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'
import { PlayCircle } from 'lucide-react'

type VideoType = {
	label?: string
	title: string
	subtitle?: string
	video: string
}

export type VideosProps = {
	style?: 'card' | 'cover'
	items: VideoType[]  
  orientation?: 'vertical' | 'horizontal'
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Videos: React.FC<VideosProps> = (props) => {
	const { items, orientation = 'vertical', enableGradient, enableOverlay } = props || {}

  const height = orientation === 'vertical' ? 360 : 200

  const [open, setOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<VideoType>()
	const handleClick = (video) => {
    setActiveVideo(video)
    setOpen(true)
  }

	return (
		<div className="w-full justify-center flex flow-row p-2">
      <div className="container mx-auto max-w-screen-2xl">
        <div 
          className={           
            "w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6"
          }>
          {items?.map((item, idx) => (
            <BlurFade delay={0.25 + idx * 0.05} key={idx}>
              <div className="relative group">
              <Image
                src={ cloudinaryImageFromVideoUrl(item?.video)}
                handleClick={() => handleClick(item)}
                enableGradient={enableGradient}
                enableOverlay={enableOverlay}		
                height={height}					
              />              
                <div className="absolute bottom-4 left-4 flex flex-row space-x-2 items-center w-full">                  
                  <PlayCircle size={24} className="text-white/60 group-hover:text-white" />
                  <div className="text-white/60 text-sm font-semibold group-hover:text-white">
                    {item?.title}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
			{items?.length == 0 && (
				<Alert
					icon="ri-video-fill"
					title="No videos yet."
					description="Videos will appear here."
				/>
			)}
		</div>
    <VideoModal 
      open={open}
      handleClose={() => setOpen(false)}
      //@ts-ignore 
      src={ activeVideo?.video }
      title={ activeVideo?.title }
    />      
    </div>
	)
}

export default Videos
