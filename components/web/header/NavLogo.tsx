'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { useApp } from '../../../hooks'

const LOGO_WIDTH = 180
const LOGO_HEIGHT = 56

type LogoProps = {
	src?: string
	width?: number
	height?: number
	handleClick: (path: string) => void
}

export default function Logo(props: LogoProps) {
	const { logo, name } = useApp()

	const { src, width = LOGO_WIDTH, height = LOGO_HEIGHT, handleClick } = props

	return (
		<Button className="px-2" variant="light" onPress={() => handleClick('/')}>
			{src ? (
				<Image
					src={src}
					alt="logo"
					width={width}
					height={height}
					className="object-contain"
				/>
			) : (
				<div className="flex items-center text-foreground">
					<svg fill="none" height="36" viewBox="0 0 32 32" width="36">
						<path
							clipRule="evenodd"
							d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
							fill="currentColor"
							fillRule="evenodd"
						/>
					</svg>
					<p className="text-foreground font-bold uppercase text-inherit">
						{name}
					</p>
				</div>
			)}
		</Button>
	)
}
