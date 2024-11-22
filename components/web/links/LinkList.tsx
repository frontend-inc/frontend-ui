'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import LinkListItem from './LinkListItem'
import { ActionType } from '../../../types'

type LinkListType = {
	fill?: boolean
	border?: boolean
	color: string
	icon: string
	title: string
	subtitle: string
	action: ActionType
	path?: string
	url?: string
	src?: string
}

export type LinkListProps = {
	fill?: boolean
	border?: boolean
	items: LinkListType[]
}

const LinkList: React.FC<LinkListProps> = (props) => {
	const { fill, border, items } = props || {}

	return (
		<div className="w-full justify-center flex flow-row py-1">
			<div className="container mx-auto max-w-screen-2xl">
				<ul className="list-none w-full flex flex-col space-y-2">
					{items?.map((item, idx) => (
						<BlurFade delay={0.25 + idx * 0.05} key={idx}>
							<LinkListItem {...item} fill={fill} border={border} />
						</BlurFade>
					))}
				</ul>
				{items?.length == 0 && (
					<Empty
						icon="ri-list-unordered-line"
						title="No links yet."
						description="Your links will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default LinkList
