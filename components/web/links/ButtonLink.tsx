'use client'

import React from 'react'
import { RemixIcon, Typography } from '../..'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { useNavigate } from '../../../hooks'
import { cn } from '@nextui-org/react'

export type ButtonLinkType = {
	variant?: 'fill' | 'outline' | 'default'
	color: string
	icon: string
	title: string
	subtitle: string
	path?: string
	url?: string
}

export type ButtonLinkProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: ButtonLinkType[]
}

const ButtonLink: React.FC<ButtonLinkType> = (props) => {
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
					'w-full h-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-content2',
					variant === 'fill' && 'bg-content1 hover:bg-content2',
					'border-2 border-divider rounded-xl'
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
				<i className="ri-arrow-right-s-line text-xl rotate-[45] text-foreground/70" />
			</button>
		</li>
	)
}

export default ButtonLink
