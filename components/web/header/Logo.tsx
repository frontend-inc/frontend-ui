'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../../../components'
import { useApp } from '../../../hooks'

const LOGO_WIDTH = 180
const LOGO_HEIGHT = 56

type LogoProps = {
	src: string
	width?: number
	height?: number
	handleClick: (path: string) => void
}

export default function Logo(props: LogoProps) {

  const { logo, name } = useApp()

  const {
    src,
    width = LOGO_WIDTH,
    height = LOGO_HEIGHT,
    handleClick,
  } = props  

	return (
		<Button
			variant="ghost"
			className="p-0 rounded-none h-[56px] min-w-0 hover:bg-transparent focus-visible:bg-transparent overflow-hidden"
			onClick={() => handleClick('/')}
		>
			{src ? (
				<Image
					src={src}
					alt="logo"
					width={width}
					height={height}
					className="object-contain"
				/>
			) : (
				<span className="text-2xl tracking-tight font-semibold text-primary">
          {name}
        </span>
			)}
		</Button>
	)
}
