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
			borderRadius: 1,
			fontSize: (theme) => theme.typography.body2.fontSize,
			fontFamily: (theme) => theme.typography.body2.fontFamily,
			bgcolor: 'background.default',
			border: '2px solid',
			borderColor: 'divider',
			m: '1px',
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
			borderRadius: 1,
			border: '2px solid',
			borderColor: 'error.main',
		},
	},
  inputContainer: {
    width: '100%',
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
		minWidth: '100px',    
	},
	stack: {        
    display: 'flex',
    justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	stackVertical: {
    justifyContent: 'flex-start',
		alignItems: 'center',
	},
}

export default sx
