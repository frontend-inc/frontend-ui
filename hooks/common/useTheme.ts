import React, { useState, useEffect } from 'react'
import { muiTheme as defaultTheme } from '../../theme'
import { buildMuiPalette } from '../../helpers'

type ThemeProps = {
	muiTheme?: any
	primaryColor?: string
	bgcolor?: string
	borderRadius?: number
	bodyFont?: string
	headerFont?: string
	offset?: number
	mobile?: boolean
}

const useTheme = (props: ThemeProps) => {
	const {
		muiTheme = defaultTheme,
		primaryColor,
		bgcolor,
		borderRadius,
		bodyFont,
		headerFont,
		offset = 0,
		mobile = false,
	} = props || {}

	const [theme, setTheme] = useState(muiTheme)

	useEffect(() => {
		let newTheme = { ...theme }
		if (muiTheme) {
			newTheme = muiTheme
		}

		let breakpoints = { ...newTheme.breakpoints }
		let palette = { ...newTheme.palette }
		let typography = { ...newTheme.typography }
		let shape = { ...newTheme.shape }

		if (offset > 0) {
			breakpoints = {
				values: {
					xs: 0,
					sm: breakpoints.values.sm + offset,
					md: breakpoints.values.md + offset,
					lg: breakpoints.values.lg + offset,
					xl: breakpoints.values.xl + offset,
				},
			}
		}

		if (mobile == true) {
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
			palette = buildMuiPalette(palette, bgcolor)
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
			}
		}

		if (bodyFont) {
			typography = {
				...typography,
				subtitle1: {
					...typography.subtitle1,
					fontFamily: bodyFont,
				},
				subtitle2: {
					...typography.subtitle2,
					fontFamily: bodyFont,
				},
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
		offset,
		mobile,
		primaryColor,
		bgcolor,
		headerFont,
		bodyFont,
		borderRadius,
		muiTheme,
	])

	return {
		theme,
		setTheme,
	}
}

export default useTheme
