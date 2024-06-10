import React, { useState, useEffect } from 'react'
import { muiTheme as defaultTheme } from '../../theme'
import { buildMuiPalette } from '../../helpers'

type ThemeProps = {
	muiTheme?: any
	primaryColor?: string
	bgcolor?: string
  textPrimary?: string 
  textSecondary?: string
	borderRadius?: number
	bodyFont?: string
	headerFont?: string
	offsetX?: number
	deviceSize?: 'mobile' | 'tablet' | 'desktop'
}

const useTheme = (props: ThemeProps) => {

	const {
		muiTheme = defaultTheme,
		primaryColor,
    textPrimary,
    textSecondary,
		bgcolor,
		borderRadius,
		bodyFont,
		headerFont,
		offsetX = 0,
		deviceSize = 'desktop',
	} = props || {}

	const [theme, setTheme] = useState(muiTheme)

	useEffect(() => {
		let newTheme: any = {}
		if (muiTheme) {
			newTheme = muiTheme
		} else {
			newTheme = { ...theme }
		}

		let breakpoints = { ...newTheme.breakpoints }
		let palette = { ...newTheme.palette }
		let typography = { ...newTheme.typography }
		let shape = { ...newTheme.shape }

		if (offsetX > 0) {
			breakpoints = {
				values: {
					xs: 0,
					sm: breakpoints.values.sm + offsetX,
					md: breakpoints.values.md + offsetX,
					lg: breakpoints.values.lg + offsetX,
					xl: breakpoints.values.xl + offsetX,
				},
			}
		}

		if (deviceSize == 'mobile') {
			breakpoints = {
				values: {
					xs: 0,
					sm: 5000,
					md: 5000,
					lg: 5000,
					xl: 5000,
				},
			}
		}

		if (deviceSize == 'tablet') {
			breakpoints = {
				values: {
					xs: 0,
					sm: 0,
					md: 5000,
					lg: 5000,
					xl: 5000,
				},
			}
		}

		if (primaryColor) {
			palette = {
				...palette,
				primary: {
					...palette.primary,
					// @ts-ignore
					main: primaryColor,
				},
			}
		}    

		if (bgcolor) {
			palette = {
				...palette,
				background: {
					...palette.background,
					default: bgcolor,
					main: bgcolor,
				},
			}
		}

		palette = buildMuiPalette(palette)

    if (textPrimary) {
			palette = {
				...palette,
				text: {
					...palette.text,
					primary: textPrimary,
				},
			}
		}

    if (textSecondary) {
			palette = {
				...palette,
				text: {
					...palette.text,
					secondary: textSecondary,
				},
			}
		}

		if (headerFont) {
			typography = {
				...typography,
				h1: {
					...typography.h1,
					fontFamily: headerFont,
				},
				h2: {
					...typography.h2,
					fontFamily: headerFont,
				},
				h3: {
					...typography.h3,
					fontFamily: headerFont,
				},
				h4: {
					...typography.h4,
					fontFamily: headerFont,
				},
				h5: {
					...typography.h5,
					fontFamily: headerFont,
				},
				h6: {
					...typography.h6,
					fontFamily: headerFont,
				},
				subtitle1: {
					...typography.subtitle1,
					fontFamily: headerFont,
				},
				subtitle2: {
					...typography.subtitle2,
					fontFamily: headerFont,
				},
			}
		}

		if (bodyFont) {
			typography = {
				...typography,
				body1: {
					...typography.body1,
					fontFamily: bodyFont,
				},
				body2: {
					...typography.body2,
					fontFamily: bodyFont,
				},
				button: {
					...typography.button,
					fontFamily: bodyFont,
				},
				caption: {
					...typography.caption,
					fontFamily: bodyFont,
				},
				overline: {
					...typography.overline,
					fontFamily: bodyFont,
				},
			}
		}

		if (Number(borderRadius) >= 0) {
			shape = {
				...shape,
				borderRadius: Number(borderRadius),
			}
		}

		setTheme({
			...theme,
			palette,
			breakpoints,
			typography,
			shape,
		})
	}, [
		offsetX,
		deviceSize,
		primaryColor,
		bgcolor,
    textPrimary,
    textSecondary,
		headerFont,
		bodyFont,
		borderRadius,
		muiTheme   
	])

	return {
		theme,
		setTheme,
	}
}

export default useTheme
