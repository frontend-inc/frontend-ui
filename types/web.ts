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
	ref?: any
	actions: ActionType[]
	displayFields: DisplayFieldType[]
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableLikes?: boolean
	resource: any
	href?: string
	height?: number
	width?: number
	handleClick?: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
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
