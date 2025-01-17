'use client'

import React from 'react'
import { RemixIcon, ImageModal, VideoModal, ShareModal } from '../..'
import { useButton } from '../../../hooks'
import { Button as NextUIButton } from '@nextui-org/react'
import { ButtonType } from '../../../types'

type ButtonProps = Omit<ButtonType, 'label'> & {
	size?: 'sm' | 'md' | 'lg'
	label: string
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		icon,
		action,
		url,
		path,
		color = 'default',
		variant = 'solid',
		size = 'md',
		label,
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
	})

	return (
		<>
			<NextUIButton
				fullWidth
				{...rest}
				size={size}
				variant={variant}
				color={color}
				startContent={icon && <RemixIcon name={icon} />}
				/* @ts-ignore */
				onPress={handleClick}
			>
				{label}
			</NextUIButton>
			{url && (
				<>
					<VideoModal
						open={openVideo}
						handleClose={() => setOpenVideo(false)}
						src={url}
					/>
					<ImageModal
						open={openImage}
						handleClose={() => setOpenImage(false)}
						src={url}
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

export default Button
