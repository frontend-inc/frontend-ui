export default {
	defaultProps: {
		disableRipple: true,
    border: 'none !important'
	},
	styleOverrides: {
		root: {
			whiteSpace: 'nowrap',
		},
		sizeSmall: {
			height: '42px',
			minWidth: '36px',
		},
		sizeLarge: {
			height: '50px',
		},
		outlined: {
			boxShadow: 'none',
			'&:hover': {
				boxShadow: 'none',
			},
		},
		contained: {
			boxShadow: 'none',
			'&:hover': {
				boxShadow: 'none',
			},
		},
	},
}
