import { palette } from '../palette'

export default {
	styleOverrides: {
		root: {},
		input: {
			'&::placeholder': {
				opacity: 1,
				color: palette.text.secondary,
			},
		},
	},
}
