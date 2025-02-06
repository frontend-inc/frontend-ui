'use client'

import React, { forwardRef } from 'react'
import { RemixIcon, ImageModal, VideoModal, ShareModal } from '../..'
import { useButton } from '../../../hooks'
import { cn, Button as NextUIButton } from '@nextui-org/react'
import { ButtonType } from '../../../types'

type ButtonProps = Omit<ButtonType, 'label'> & {
	size?: 'sm' | 'md' | 'lg'
	text: string
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		icon,
		action,
		url,
		path,
		color = 'default',
		variant = 'solid',
		size = 'md',
		text,
    className,
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
				{...rest}
        fullWidth
        ref={ ref }
				size={size}
				variant={variant}
				color={color}
				startContent={icon && <RemixIcon name={icon} />}
				/* @ts-ignore */
				onPress={handleClick}
        className={cn('w-full', className)}
			>
				{text}
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
})

export default Button
