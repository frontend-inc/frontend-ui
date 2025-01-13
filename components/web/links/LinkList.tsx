'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import { RemixIcon, Typography } from '../..'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { useNavigate } from '../../../hooks'
import { cn } from '@nextui-org/react'

type LinkListType = {
  variant?: 'fill' | 'outline' | 'default'
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

const LinkListItem: React.FC<LinkListType> = (props) => {
	const { variant, color, icon, title, subtitle, path, url } = props

	const onClick = useNavigate({
		path,
		url,
	})

	return (
		<li className="w-full">
			<button
				//@ts-ignore
				onClick={onClick}
				className={cn(
					'w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-content2',
					variant === 'fill' && 'bg-content1 hover:bg-content2',
					variant === 'outline' && 'border border-divider rounded-lg'
				)}
			>
				<div className=" flex flex-row space-x-6 items-center">
					<Avatar className="rounded-lg">
						<AvatarFallback
							className="rounded-lg bg-primary-500"
							style={{
								backgroundColor: color,
							}}
						>
							<RemixIcon name={icon} className="text-white" />
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col space-y-0">
						<Typography variant="subtitle2">{title}</Typography>
						<Typography variant="body2" className="text-foreground/70">
							{subtitle}
						</Typography>
					</div>
				</div>
				<i className="ri-arrow-right-up-line text-xl rotate-[45] text-foreground/70" />
			</button>
		</li>
	)
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
