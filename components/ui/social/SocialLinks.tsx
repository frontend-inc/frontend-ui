'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import SocialLink from './SocialLink'

type SocialLinkListType = {
	variant?: 'fill' | 'outline' | 'default'
	provider: string
	title: string
	subtitle: string
	url?: string
}

export type SocialLinkListProps = {
	variant?: 'fill' | 'outline' | 'default'
	links: SocialLinkListType[]
}

const SocialLinks: React.FC<SocialLinkListProps> = (props) => {
	const { variant, links } = props || {}

	return (
		<div className="w-full flex flow-row">
			<div className="container mx-auto max-w-screen-2xl">
				<ul className="list-none w-full flex flex-col space-y-2 py-2">
					{links?.map((item, idx) => (
						<BlurFade delay={0.25 + idx * 0.05} key={idx}>
							<SocialLink {...item} variant={variant} />
						</BlurFade>
					))}
				</ul>
				{links?.length == 0 && (
					<Empty
						icon="ri-instagram-fill"
						title="No social media links"
						description="Your social media links will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default SocialLinks
