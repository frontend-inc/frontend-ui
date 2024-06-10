import React from 'react'
import ThemeContext from './ThemeContext'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { useTheme } from '../hooks'

type ThemeProviderProps = {
	children: React.ReactNode
	muiTheme?: any
	primaryColor?: string
	bgcolor?: string
	headerFont?: string
	bodyFont?: string
	borderRadius?: number
  textPrimary?: string //color
  textSecondary?: string //color
	deviceSize?: 'mobile' | 'tablet' | 'desktop'
	offsetX?: number
	offsetY?: number
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const {
		children,
		muiTheme,
		primaryColor,
		bgcolor,
    textPrimary,
    textSecondary,
		headerFont,
		bodyFont,
		borderRadius,
		deviceSize,
		offsetX,
	} = props || {}

	const { theme, setTheme } = useTheme({
		muiTheme,
		primaryColor,
		bgcolor,
    textPrimary,
    textSecondary,
		headerFont,
		bodyFont,
		borderRadius,
		deviceSize,
		offsetX,
	})

	const value = {
		theme,
		setTheme,
	}

	return (
		<ThemeContext.Provider value={value}>
			<MuiThemeProvider
				theme={
					// @ts-ignore
					createTheme(theme)
				}
			>
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
