import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'context'
import UnplashLogo from './unsplash-logo.svg'
import UnplashLogoWhite from './unsplash-logo-white.svg'
import Image from 'next/image'

type UnsplashLogoProps = {
	width?: number
	height?: number
}

const UnsplashLogo: React.FC<UnsplashLogoProps> = (props) => {
	const { width = 100, height = 20 } = props
	const [logo, setLogo] = useState(UnplashLogo)
	const { mode } = useContext(ThemeContext)

	useEffect(() => {
		if (mode == 'light') {
			setLogo(UnplashLogo)
		} else {
			setLogo(UnplashLogoWhite)
		}
	}, [mode])

	if (!logo) return null
	return (
		<Image
			src={logo}
			width={width}
			height={height}
			style={{
				objectFit: 'contain',
			}}
			alt="unsplash-logo"
		/>
	)
}

export default UnsplashLogo
