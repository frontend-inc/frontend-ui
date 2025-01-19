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
		<div className="w-full flex flex-row flex-wrap gap-2 items-center justify-center">
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
