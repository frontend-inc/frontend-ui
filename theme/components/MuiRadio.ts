import { palette } from '../palette'

export default {
	styleOverrides: {
		root: {},
		input: {
			'&::placeholder': {
				color: palette.text.secondary,
			},
		},
	},
}
