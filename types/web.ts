'use client'

import React from 'react'
import { ButtonType } from './buttons'
import { MetafieldType, FormFieldType } from './forms'

export type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center'
  fontSize?: 'sm' | 'md' | 'lg' | 'xl'
}

export type StackProps = {
  direction?: 'row' | 'column'
  split?: '1/4' | '1/3' | '1/2'
} 

export type SectionProps = {
	children?: React.ReactNode
	bgColor?: string
	mode?: 'dark' | 'light'
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
  fill?: boolean
  border?: boolean
	py?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
	px?: number
	requireAuth?: boolean
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
	id?: number
	label: string
	title: string
  subtitle?: string
	description?: string
	price: number
	features: string[]
	interval?: string
	recurring?: boolean
	popular?: boolean
	buttonText: string
	url?: string
	path?: string
}

export type TestimonialType = {
	title: string
	subtitle: string
	image: string
	size?: 'small' | 'large'
}
