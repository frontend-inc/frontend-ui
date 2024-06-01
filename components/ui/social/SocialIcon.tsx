import React from 'react'
import { IconButton } from '@mui/material'
//@ts-ignore
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

type SocialIconProps = {
	provider: string
	url?: string
  handleClick?: () => void
  bgColor?: string
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
	const { provider, handleClick, bgColor } = props || {}


	return (
		<IconButton size="small" onClick={handleClick}>
			<ReactSocialIcon 
        /* @ts-ignore */
        network={provider} 
        bgColor={bgColor} 
        style={styles} 
      />
		</IconButton>
	)
}

export default SocialIcon

const styles = {
	height: 32,
	width: 32,
}
