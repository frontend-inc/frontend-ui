import React from 'react'

export type SyntheticEventType =
	| React.ChangeEvent<HTMLInputElement>
	| {
			target: {
				name: string
				value: any
			}
	  }

export type OptionType = {
	label: string
	value: string | number | boolean | null
	icon?: string
}

export type TypographyVariantsType =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2'
	| 'button'
	| 'caption'
	| 'overline'
