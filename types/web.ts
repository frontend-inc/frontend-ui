import { TypographyVariant } from '@mui/material'
import { ActionType } from './actions'

export type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
}

export type SectionProps = {
	children: React.ReactNode
	enableTransitions?: boolean
	bgcolor?: string
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	py?: number
	px?: number
	requireAuth?: boolean
	requireTeam?: boolean
	requirePaid?: boolean
	requireAdmin?: boolean
}

export type CardProps = {
	actions: ActionType[]
	editing?: boolean
	variant?: 'list' | 'grid'
	item: any & {
		label?: string
		title?: string
		description?: string
		image?: {
			url: string
		}
		video?: string
	}
	buttonText?: string
	textVariant?: TypographyVariant
	size?: number
	href?: string
	height?: number
	width?: number
	handleClick?: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	objectFit?: 'cover' | 'contain'
	responsive?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	icon?: string
}

export type PriceType = {
	label: string
	title: string
	price: number
	features: {
		label: string
	}[]
  recurring?: boolean
  recurring_rate?: string
	buttonText: string
	url?: string
  stripe_payment_url?: string
}
