import { palette } from '../palette'
import { typography } from '../typography'
import { alpha } from '@mui/material'

export default {
	styleOverrides: {
		root: {
			...typography.body2,
			padding: '0 4px 0 4px',
			borderBottom: `1px solid ${alpha(palette.divider, 0.6)}`,
		},
	},
}
