'use client'

import React from 'react'
import { Button } from '../../core'
import { Icon, ImageModal, VideoModal, ShareModal } from '../..'
import { useButton } from '../../../hooks'
import { ActionType } from '../../../types'

type ButtonActionProps = {
	icon?: string
  action: ActionType
	variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
	size?: 'sm' | 'default' | 'lg'
	url?: string
	path?: string
  src?: string
	children: React.ReactNode
}

const ButtonAction: React.FC<ButtonActionProps> = (props) => {
	const {
		children,
		icon,
    action,
		url,
		path,
    src,
		variant = 'secondary',
		size = 'default',
		...rest
	} = props

	const {
    openShare,
    setOpenShare,
    openVideo,
    setOpenVideo,
    openImage,
    setOpenImage,
    handleClick 
  } = useButton({
    action,
		url,
		path,
    src,
	})
  
	return (
    <>
		<Button
			fullWidth
			size={size}
			startIcon={
				icon && (
					<Icon
						name={icon}
						className={
							variant == 'default'
								? 'text-primary-foreground'
								: 'text-secondary-foreground'
						}
					/>
				)
			}
			/* @ts-ignore */
			onClick={handleClick}
			variant={variant}
			{...rest}
		>
			{children}
		</Button>
    { src && (
      <>
        <VideoModal 
          open={ openVideo }
          handleClose={() => setOpenVideo(false) }
          src={ src }
        />
        <ImageModal 
          open={ openImage }
          handleClose={() => setOpenImage(false) }
          src={ src }
        />        
        <ShareModal 
          open={ openShare }
          handleClose={() => setOpenShare(false) }
          //@ts-ignore
          url={ url }
        />
    </>
    )}
  </>
	)
}

export default ButtonAction
