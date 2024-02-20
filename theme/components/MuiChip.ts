import { typography } from '../../theme'
import { palette } from '../../theme'

export default {
	styleOverrides: {
		root: {
			bgcolor: palette.background.paper,
			fontFamily: typography.body2.fontFamily,
		},
		deletable: {
			'&:focus': {},
		},
	},
}
