'use client'

import React, { useState, useEffect } from 'react'
import ThemeContext from './ThemeContext'
import GoogleFontLoader from 'react-google-font-loader'
import { NextUIProvider } from '@nextui-org/react'

type ThemeProviderProps = {
	mode?: 'light' | 'dark'
	theme?: string
	primaryColor?: string
	headerFont?: string
	bodyFont?: string
	borderRadius: number
	children: React.ReactNode
}

type GoogleFont = {
	font: string
	weights: number[]
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const [googleFonts, setGoogleFonts] = useState<any>()

	const {
		mode = 'dark',
		theme = 'dark',
		primaryColor,
		headerFont = 'Inter',
		bodyFont = 'Inter',
		borderRadius,
		children,
	} = props || {}

	const value = {
		mode,
		theme,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
	}

	useEffect(() => {
		if (headerFont) {
			document.documentElement.style.setProperty('--font-header', headerFont)
		}
		if (bodyFont) {
			document.documentElement.style.setProperty('--font-body', bodyFont)
		}
		if (borderRadius >= 0) {
			document.documentElement.style.setProperty(
				'--radius',
				`${borderRadius}px`
			)
		}
	}, [headerFont, bodyFont, borderRadius])

	useEffect(() => {
		if (headerFont || bodyFont) {
			let fonts: GoogleFont[] = []
			if (headerFont) {
				fonts.push({
					font: headerFont,
					weights: [400, 600, 700, 800, 900],
				})
			}
			if (bodyFont) {
				fonts.push({
					font: bodyFont,
					weights: [400, 600, 700, 800, 900],
				})
			}
			setGoogleFonts(fonts)
		}
	}, [headerFont, bodyFont])

	let themeClass = `${theme}-${mode}`
	if (theme == 'light') {
		themeClass = `light`
	}
	if (theme == 'dark') {
		themeClass = `dark`
	}

	return (
		<ThemeContext.Provider value={value}>
			{googleFonts?.length > 0 && <GoogleFontLoader fonts={googleFonts} />}
			<NextUIProvider className={themeClass}>{children}</NextUIProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
