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

export type AttachmentInputProps = {
	errors?: any
	name: string
	label?: string
	handleChange: (e: SyntheticEventType) => void
	value: any
	handleRemove: (name: string) => void
	variant?: 'image' | 'file'
	objectFit?: 'contain' | 'cover'
	size?: number
}

export type InputPropsType = {
	errors?: any
	value?: any
	name: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	disabled?: boolean
	options?: OptionType[]
	direction?: 'row' | 'column'
	styles?: any
}

export type TextInputPropsType = InputPropsType & {
	direction?: 'row' | 'column'
	type?: string
	margin?: 'dense' | 'none'
	multiline?: boolean
	rows?: number
}

export type SelectInputPropsType = InputPropsType & {
	options: OptionType[]
}

