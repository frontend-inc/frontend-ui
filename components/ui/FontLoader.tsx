'use client'

import React, { useEffect, useState } from 'react'
import GoogleFontLoader from 'react-google-font-loader'

type FontLoaderProps = {
  headerFont: string
	bodyFont: string 
}

const FontLoader: React.FC<FontLoaderProps> = ({ headerFont, bodyFont }) => {
	const [googleFonts, setGoogleFonts] = useState<any>()

	useEffect(() => {
		if (headerFont || bodyFont) {
			let fonts = [
				{ font: 'Inter', weights: [400, 600, 700, 800] },
				{ font: 'Roboto', weights: [400, 600, 700, 800] },
			]
			if (headerFont) {
				fonts.push({
					font: headerFont,
					weights: [400, 600, 700, 800],
				})
			}
			if (bodyFont) {
				fonts.push({
					font: bodyFont,
					weights: [400, 600, 700, 800],
				})
			}
			setGoogleFonts(fonts)

		}
	}, [headerFont, bodyFont])

	if (!googleFonts) return null
	return <GoogleFontLoader fonts={googleFonts} />
}

export default FontLoader
