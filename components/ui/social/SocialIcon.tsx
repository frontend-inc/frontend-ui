'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
//@ts-ignore
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

type SocialIconProps = {
	provider: string
	url?: string
	handleClick?: () => void
	color?: string
	size?: number
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
	const { provider, handleClick, size = 20 } = props || {}
	return (
		<Button isIconOnly className="min-w-10" radius="full" onPress={handleClick}>
			<ReactSocialIcon
				/* @ts-ignore */
				network={provider}
				style={{
					height: size,
					width: size,
				}}
			/>
		</Button>
	)
}

export default SocialIcon
