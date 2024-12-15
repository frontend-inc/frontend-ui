'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import LinkListItem from './LinkListItem'

type LinkListType = {
	fill?: boolean
	border?: boolean
	color: string
	icon: string
	title: string
	subtitle: string
	path?: string
	url?: string
}

export type LinkListProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: LinkListType[]
}

const LinkList: React.FC<LinkListProps> = (props) => {
	const { variant, items } = props || {}

	return (
		<div className="w-full justify-center flex flow-row">
			<div className="container mx-auto max-w-screen-2xl">
				<ul className="list-none w-full flex flex-col space-y-2 py-2">
					{items?.map((item, idx) => (
						<BlurFade delay={0.25 + idx * 0.05} key={idx}>
							<LinkListItem {...item} variant={variant} />
						</BlurFade>
					))}
				</ul>
				{items?.length == 0 && (
					<Empty
						icon="ri-list-unordered-line"
						title="No links"
						description="Your links will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default LinkList
