import React from 'react'
import { muiTheme } from '../../theme'
import { createTheme } from '@mui/material/styles'
//@ts-ignore
const theme = createTheme(muiTheme)

export const selectStyles: any = {
	select: (styles) => ({
		...styles,
	}),
	control: (styles) => ({
		...styles,
		width: '100%',
		fontSize: theme.typography.body1.fontSize,
		mt: '0px',
		fontFamily: theme.typography.body1.fontFamily,
		p: '2px',
		minHeight: 40,
		border: '1px solid',
		borderColor: theme.palette.primary.main,
		color: 'text.primary',
		bgcolor: 'background.paper',
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
		...styles,
		bgcolor: 'background.paper',
		fontSize: theme.typography.body1.fontSize,
		fontFamily: theme.typography.body1.fontFamily,
		cursor: 'pointer',
		color: 'text.primary',
		height: '40px',
		':hover': {
			bgcolor: 'background.paper',
			color: 'primary.main',
		},
	}),
	noOptionsMessage: (styles) => ({
		...styles,
		fontSize: theme.typography.body1.fontSize,
		fontFamily: theme.typography.body1.fontFamily,
		bgcolor: 'common.input',
	}),
	menu: (styles) => ({
		bgcolor: 'background.paper',
		zIndex: 999,
		position: 'absolute',
		width: '100%',
		borderRadius: 1,
	}),
	input: (styles) => ({
		...styles,
		color: 'text.primary',
	}),
	placeholder: (styles) => ({
		...styles,
		fontSize: theme.typography.body1.fontSize,
		fontFamily: theme.typography.body1.fontFamily,
		color: 'text.primary',
	}),
	singleValue: (styles) => ({
		...styles,
		color: 'text.primary',
		borderRadius: 1,
	}),
	multiValue: (styles) => ({
		...styles,
		p: '0px 2px',
		borderRadius: 1,
		fontSize: 15,
		border: '1px solid',
		borderColor: theme.palette.primary.main,
		bgcolor: 'common.input',
	}),
	multiValueLabel: (styles) => ({
		...styles,
		color: 'primary.main',
	}),
	multiValueRemove: (styles) => ({
		...styles,
		color: 'primary.main',
		cursor: 'pointer',
		':hover': {
			color: 'primary.main',
		},
	}),
}
