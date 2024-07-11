export default {
	defaultProps: {
		disableRipple: true,
	},
	styleOverrides: {
		root: {
			whiteSpace: 'nowrap',
			boxShadow: '0px 1px 1px 0 rgba(0,0,0,0.2)',
		},
		sizeSmall: {},
		sizeLarge: {},
		outlined: {},
		contained: {
			boxShadow: '0px 1px 1px 0 rgba(0,0,0,0.2)',
			'&:hover': {
				boxShadow: '0px 2px 1px 0 rgba(0,0,0,0.4)',
			},
		},
	},
}
