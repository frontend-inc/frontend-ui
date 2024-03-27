export const sx = {
	inputBase: {
		p: 0,
		color: 'text.secondary',
		width: '100%',
		'& input, & .MuiInputBase-inputMultiline': {
			WebkitAppearance: 'none',
			MozAppearance: 'none',
			appearance: 'none',
			p: 1,
			borderRadius: (theme) => `${theme.shape.borderRadius}px`,
			fontSize: (theme) => theme.typography.body2.fontSize,
			fontFamily: (theme) => theme.typography.body2.fontFamily,
			bgcolor: 'background.default',
			border: '2px solid',
			borderColor: 'divider',
			m: '1px',
			boxShadow: `0 1px 3px 0 rgb(120 120 175 / 20%)`,
			'&:focus': {
				m: '0px',
				boxShadow: `none`,
				border: '3px solid',
				borderColor: 'primary.main',
			},
		},
	},
	inputError: {
		'& input, & .MuiInputBase-inputMultiline': {
			p: 1,
			borderRadius: (theme) => `${theme.shape.borderRadius}px`,
			border: '2px solid',
			borderColor: 'error.main',
		},
	},
	paper: {
		bgcolor: 'background.paper',
		mt: 1,
		color: 'text.secondary',
		fontSize: 15,
	},
	option: {
		minHeight: 'auto',
		alignItems: 'flex-start',
		p: 8,
		'&[aria-selected="true"]': {
			bgcolor: 'transparent',
		},
		'&[data-focus="true"]': {
			bgcolor: 'action.hover',
		},
	},
	popperDisablePortal: {
		position: 'relative',
	},
	label: {
		mb: 0,
		minWidth: '100px',
	},
	stack: {
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
}

export default sx
