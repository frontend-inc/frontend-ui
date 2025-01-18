'use client'

import React, { useState } from 'react'
import { Card } from '@nextui-org/react'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'
import { Image, VideoModal, RemixIcon } from '../../../components'

type VideoCardProps = { 
  src: string
  image?: string
  title: string
  enableOverlay?: boolean
  enableGradient?: boolean
}

const VideoCard: React.FC<VideoCardProps> = (props) => {

  const { 
    src,
    image,
    title,   
    enableOverlay,
    enableGradient 
  } = props || {}

  const [open, setOpen] = useState(false)
  const cloudinaryImage = cloudinaryImageFromVideoUrl(src)
  
  return(
    <>
      <Card 
        isHoverable
        isPressable 
        onPress={() => setOpen(true)}
        className="w-full relative"
      >
        <Image
          src={image ? image : cloudinaryImage }
          alt='video-cover'
          enableOverlay={enableOverlay}
          enableGradient={enableGradient}
          disableBorderRadius
        />
        <div className="absolute bottom-2 left-2">
          <RemixIcon name="play-fill" />
        </div>
      </Card>
      <VideoModal
        open={ open }
        handleClose={ () => setOpen(false) }
        src={ src }
      />
    </>
  )
}

export default VideoCard 