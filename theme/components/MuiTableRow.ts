import { palette } from '../palette'

export default {
	styleOverrides: {
		root: {
			'&$selected': {
				bgcolor: palette.background.default,
			},
			'&$hover': {
				'&:hover': {
					bgcolor: palette.background.default,
				},
			},
		},
	},
}
