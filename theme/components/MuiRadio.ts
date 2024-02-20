import { palette } from '../palette'

export default {
	styleOverrides: {
		root: {
			fontSize: '11px',
			textTransform: 'uppercase',
		},
		input: {
			'&::placeholder': {
				opacity: 1,
				color: palette.text.secondary,
			},
		},
	},
}
