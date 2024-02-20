import { palette } from '../palette'

export default {
	styleOverrides: {
		root: {
			color: palette.text.primary,
			'&:hover': {
				bgcolor: 'rgba(208, 208, 208, 0.20)',
			},
			'&$selected': {
				bgcolor: 'rgba(208, 208, 208, 0.20)',
				color: palette.primary.main,
				'&:hover': {
					bgcolor: 'rgba(208, 208, 208, 0.30)',
				},
			},
			'&:first-child': {
				borderTopLeftRadius: 4,
				borderBottomLeftRadius: 4,
			},
			'&:last-child': {
				borderTopRightRadius: 4,
				borderBottomRightRadius: 4,
			},
		},
	},
}
