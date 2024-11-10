'use client'

import React, { useState, useEffect } from 'react'
import ThemeContext from './ThemeContext'
import { cn } from 'frontend-shadcn'

type ThemeProviderProps = {
	mode?: 'light' | 'dark'
	theme?: string
	primaryColor?: string
	headerFont?: string
	bodyFont?: string
	borderRadius: number
	children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
	
  const {
		theme = 'light',
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
		children,
	} = props || {}

	const value = {
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


	return (
		<ThemeContext.Provider value={value}>      
			<div className={cn(theme, 'w-full')}>{children}</div>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
