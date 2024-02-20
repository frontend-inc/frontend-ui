import { Option, SyntheticEvent } from '../types'

export type AttachmentInputProps = {
	errors?: any
	name: string
	label?: string
	handleChange: (e: SyntheticEvent) => void
	value: any
	handleRemove: (name: string) => void
	variant?: 'image' | 'file'
  objectFit?: 'contain' | 'cover'
	size?: number
}

export type InputProps = {
	errors?: any
	value?: any
	name: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEvent) => void
	disabled?: boolean
	options?: Option[]
	direction?: 'row' | 'column'
	styles?: any
}

export type TextInputProps = InputProps & {
	direction?: 'row' | 'column'
	type?: string
	margin?: 'dense' | 'none'
	multiline?: boolean
	rows?: number
}

export type SelectInputProps = InputProps & {
	options: Option[]
}
