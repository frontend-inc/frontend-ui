import { lighten, darken, getContrastRatio } from '@mui/material'

export const buildMuiPalette = (palette, bgcolor) => {

	const contrast = getContrastRatio(bgcolor, '#000000')
  const paper = contrast > 10 ? darken(bgcolor, 0.1) : lighten(bgcolor, 0.1)
	const primaryText = contrast > 10 ? darken(bgcolor, 0.9) : lighten(bgcolor, 0.9)
	const secondaryText = contrast > 10 ? darken(bgcolor, 0.7) : lighten(bgcolor, 0.7)
	const divider = contrast > 10 ? darken(bgcolor, 0.2) : lighten(bgcolor, 0.2)

	let muiPalette = {
		...palette,
		background: {
			default: bgcolor,
			main: bgcolor,
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
