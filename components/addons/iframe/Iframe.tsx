import React, { useState, useEffect } from 'react'
import { cn } from 'frontend-shadcn'
import { useMediaQuery } from 'react-responsive'

export type IframeProps = {
  src: string
  height?: string
  mobileHeight?: string
  className?: string
}

const Iframe: React.FC<IframeProps> = (props) => {

  const { src, height=400, mobileHeight=400, className } = props 
	const isMobile = useMediaQuery({ maxWidth: 639 })

  const [iframeHeight, setIframeHeight] = useState(height)

  useEffect(() => {
    if (isMobile) {
      setIframeHeight(mobileHeight)
    }
  }, [isMobile])

  return(
    <iframe
      src={src}      
      height={height}
      style={{
        width: '100%',
        border: 'none',
        overflow: 'hidden'
      }}
      className={cn('w-full border-0', className)}
    />
  )
}

export default Iframe