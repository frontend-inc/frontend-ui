'use client'

import React from 'react'
import { Card, Placeholder, Button } from '../..'
import { useNavigate } from '../../../hooks'
import { BlurFade } from '../..'
import LinkListItem from './LinkListItem'
import { ActionType } from '../../../types'

type LinkListType = {
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
	items: LinkListType[]
}

const LinkList: React.FC<LinkListProps> = (props) => {
	const { items } = props || {}

	return (
		<div className="w-full justify-center flex flow-row">
      <div className="container mx-auto max-w-screen-2xl">
			<ul className="list-none w-full flex flex-col space-y-2">
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} key={idx}>
						<LinkListItem
              { ...item }									
						/>
					</BlurFade>
				))}
			</ul>
			{items?.length == 0 && (
				<Placeholder
					icon="Link"
					title="No links yet."
					description="Your links will appear here."
				/>
			)}
		</div>
    </div>
	)
}

export default LinkList
