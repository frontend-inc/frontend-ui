'use client'

import React from 'react'
import { RemixIcon, ImageModal, VideoModal, ShareModal } from '../..'
import { useButton } from '../../../hooks'
import { ActionType } from '../../../types'
import { Button } from '../../../components'

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
		icon,
		action,
		url,
		path,
		src,
		variant = 'secondary',
		size = 'default',
		children,
		...rest
	} = props

	const {
		openShare,
		setOpenShare,
		openVideo,
		setOpenVideo,
		openImage,
		setOpenImage,
		handleClick,
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
        {...rest}
				size={size}
				startIcon={
					icon && (
						<RemixIcon
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
			>
				{children}
			</Button>
			{src && (
				<>
					<VideoModal
						open={openVideo}
						handleClose={() => setOpenVideo(false)}
						src={src}
					/>
					<ImageModal
						open={openImage}
						handleClose={() => setOpenImage(false)}
						src={src}
					/>
					<ShareModal
						open={openShare}
						handleClose={() => setOpenShare(false)}
						//@ts-ignore
						url={url}
					/>
				</>
			)}
		</>
	)
}

export default ButtonAction
