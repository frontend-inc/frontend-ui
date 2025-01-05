'use client'

import React from 'react'
import { RemixIcon, ImageModal, VideoModal, ShareModal } from '../..'
import { useButton } from '../../../hooks'
import { ActionType } from '../../../types'
import { Button } from '@nextui-org/react'

type ButtonActionProps = {
	icon?: string
	action: ActionType
	color?: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'info'
	variant?: 'solid' | 'ghost' | 'light'
	size?: 'sm' | 'md' | 'lg'
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
		color='default',
		variant = 'solid',
		size = 'md',
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
				variant={variant}
				color={ color }
				startContent={
					icon && (
						<RemixIcon
							name={icon}							
						/>
					)
				}
				/* @ts-ignore */
				onPress={handleClick}
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
