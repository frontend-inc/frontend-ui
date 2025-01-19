import React from 'react'
import { SocialIconButton } from '../..'

type SocialIconButtonsProps = {
	links: {
		provider: string
		url: string
	}[]
}

const SocialIconButtons: React.FC<SocialIconButtonsProps> = (props) => {
	const { links = [] } = props || {}
	return (
		<div className="w-full flex flex-row items-center justify-center space-x-1">
			{links?.map((link) => (
				<SocialIconButton
					url={link.url}
					provider={link.provider}
					key={link.provider}
				/>
			))}
		</div>
	)
}

export default SocialIconButtons
