import { TypographyVariant } from '@mui/material'

export type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
}

export type SectionProps = {
	children: React.ReactNode
  enableAnimation?: boolean
	bgcolor?: string
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	py?: number
	px?: number
}

export type CardProps = {
	editing?: boolean
  direction?: 'row' | 'column'
	label?: string
	title?: string
	description?: string
	image?: string
	video?: string
	buttonText?: string
	textVariant?: TypographyVariant
	size?: number
	href?: string
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
	responsive?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	icon?: string
}

export type PriceType = {
  label: string 
	title: string
	price: number
	features: {
		label: string
	}[]
	buttonText: string
	url: string
}
