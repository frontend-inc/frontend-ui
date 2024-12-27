'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
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
			variant="light"
			onPress={() => handleClick('/')}
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
				<span className="text-xl tracking-tight font-semibold text-primary">
          {name}
        </span>
			)}
		</Button>
	)
}
