import React from 'react'
import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import { get } from 'lodash'
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
	const { provider, handleClick, color, size = 20 } = props || {}
	return (
		<IconButton size="small" onClick={handleClick}>
			<ReactSocialIcon
				/* @ts-ignore */
				network={provider}
				style={{ height: size, width: size }}
			/>
		</IconButton>
	)
}

export default SocialIcon
