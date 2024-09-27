import { lighten, darken, getContrastRatio } from '@mui/material'

export const buildMuiPalette = (palette) => {
	const bgColor = palette.background.default
	const contrast = getContrastRatio(bgColor, '#000000')
	const paper = lighten(bgColor, 0.02)
	const primaryText =
		contrast > 10 ? darken(bgColor, 0.9) : lighten(bgColor, 0.9)
	const secondaryText =
		contrast > 10 ? darken(bgColor, 0.7) : lighten(bgColor, 1.0)
	const divider = contrast > 10 ? darken(bgColor, 0.12) : lighten(bgColor, 0.12)

	let muiPalette = {
		...palette,
		background: {
			default: bgColor,
			main: bgColor,
			paper: paper,
		},
		divider: divider,
		text: {
			primary: primaryText,
			secondary: secondaryText,
		},
	}

	return muiPalette
}
