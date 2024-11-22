'use client'

import React from 'react'
import { Alert } from '../..'
import { BlurFade } from '../..'
import PriceListItem from './PriceListItem'
import { ActionType } from '../../../types'

type PriceListType = {
	fill?: boolean
	border?: boolean
	image: string
	title: string
	subtitle: string
	action: ActionType
	path?: string
	url?: string
	src?: string
}

export type PriceListProps = {
	fill?: boolean
	border?: boolean
	items: PriceListType[]
}

const PriceList: React.FC<PriceListProps> = (props) => {
	const { fill, border, items } = props || {}

	return (
		<div className="w-full justify-center flex flow-row">
			<div className="container mx-auto max-w-screen-2xl">
				<ul className="list-none w-full flex flex-col space-y-2">
					{items?.map((item, idx) => (
						<BlurFade delay={0.25 + idx * 0.05} key={idx}>
							<PriceListItem {...item} fill={fill} border={border} />
						</BlurFade>
					))}
				</ul>
				{items?.length == 0 && (
					<Alert
						icon="ri-list-unordered-line"
						title="No items yet."
						description="Your items will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default PriceList
