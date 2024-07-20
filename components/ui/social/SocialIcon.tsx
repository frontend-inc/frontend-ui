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
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
	const { provider, handleClick, color='primary.main' } = props || {}
	const theme = useTheme()
  let bgColor = get(theme.palette, color)
	return (
		<IconButton size="small" onClick={handleClick}>
			<ReactSocialIcon
				/* @ts-ignore */
				network={provider}
				bgColor={bgColor}
        style={{ height: 20, width: 20 }}
			/>
		</IconButton>
	)
}

export default SocialIcon
