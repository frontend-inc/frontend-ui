import components from './components'
import { breakpoints } from './breakpoints'
import { palette } from './palette'
import { shape } from './shape'
import { typography } from './typography'
import { spacing } from './spacing'

export const muiTheme = {
	breakpoints,
	components,
	palette: {
		...palette,
		editor: {
			dark: '#282C34',
			main: '#343842',
			light: '#343842',
		},
	},
	typography,
	shape,
	spacing,
}

