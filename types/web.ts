import React from 'react'
import { TypographyVariant } from '@mui/material'
import { ActionType } from './actions'
import { DisplayFieldType, FormFieldType } from './forms'

export type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
}

export type SectionProps = {
	children: React.ReactNode
	enableTransitions?: boolean
	mode?: 'dark' | 'light' | 'accent'
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	py?: number
	px?: number
	requireAuth?: boolean
	requireTeam?: boolean
	requirePaid?: boolean
	requireAdmin?: boolean
}

export type FormProps = {
	fields: FormFieldType[]
	editFields?: FormFieldType[]
	createFields?: FormFieldType[]
}

export type ForeignProps = {
	resource: any
	foreignUrl: string
	foreignContentType: string
}

export type CardProps = {
	ref?: React.Ref<any>
	actions: ActionType[]
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	editing?: boolean
	resource: any & {
		label?: string
		title?: string
		description?: string
		image?: {
			url: string
		}
		video?: string
	}
	displayFields: DisplayFieldType[]
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
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	icon?: string
}

export type PriceType = {
	id?: number
	label: string
	title: string
	price: number
	price_type: 'stripe_payment_link' | 'url'
	features: {
		label: string
	}[]
	recurring?: boolean
	recurring_rate?: string
	buttonText: string
	url?: string
	stripe_payment_url?: string
}
