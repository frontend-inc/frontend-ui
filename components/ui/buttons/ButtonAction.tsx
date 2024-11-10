'use client'

import React, { useState } from 'react'
import { Button } from '../../core'
import { Icon, ImageModal, VideoModal } from '../..'
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
    openVideo,
    openImage,
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
    <VideoModal 
      open={ openVideo }
      handleClose={() => setVideoOpen(false) }
      src={ src }
    />
    <ImageModal 
      open={ openImage }
      handleClose={() => setImageOpen(false) }
      src={ src }
    />
  </>
	)
}

export default ButtonAction
