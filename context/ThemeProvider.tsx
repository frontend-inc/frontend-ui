'use client'

import React from 'react'
import ThemeContext from './ThemeContext'

type ThemeProviderProps = {
  mode?: string	
	primaryColor?: string	
	headerFont?: string
	bodyFont?: string
	borderRadius?: number
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
	
  const {
    mode,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
		children,
	} = props || {}

	const value = {
    mode,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
