'use client'

import React from 'react'
import { ButtonType } from './buttons'
import { MetafieldType, FormFieldType } from './forms'
import { SyntheticEventType } from 'frontend-js'

export type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center'
	fontSize?: 'sm' | 'md' | 'lg' | 'xl'  
	isEditing?: boolean
	handleChange?: (ev: SyntheticEventType) => void
}

export type StackProps = {
	direction?: 'row' | 'column'
}

export type SectionProps = {
	children?: React.ReactNode
	bgColor?: string
	bgImage?: string
	bgOverlay?: boolean
	mode?: 'dark' | 'light'
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	variant?: 'fill' | 'outline' | 'default'
	py?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
	px?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 
	requireAuth?: boolean
  className?: string
}

export type FormProps = {
	fields: FormFieldType[]
	editFields?: FormFieldType[]
	createFields?: FormFieldType[]
}

export type CardProps = {
	ref?: any
	buttons: ButtonType[]
	displayFields: MetafieldType[]
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
	id?: number | string
	label?: string
	title: string
	subtitle?: string
	price: number
	compareAtPrice?: number
	features: string[]
	interval?: string
	recurring?: boolean
	popular?: boolean
	buttonText?: string
	url?: string
	path?: string
}

export type TestimonialType = {
	title: string
	subtitle: string
	image: string
	size?: 'small' | 'large'
}
