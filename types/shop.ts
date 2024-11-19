import { UserType } from './users'

export type LineItemType = {
	id?: number
	cart_id?: number
	product_id: number
	product: ProductType
	quantity: number
}

export type CartType = {
	id?: number
	uid?: string
	user_id?: number
	line_items: LineItemType[]
	subtotal?: number
	display_subtotal?: string
	user?: UserType
}

export type ProductType = {
	id?: number
	label?: string
	handle?: string
	title?: string
	description: string
	price?: number
	compare_at_price?: number
	display_price?: string
	display_compare_at_price?: string
	available_for_sale?: boolean
  average_rating: number
	image: {
		url: string
	}
	video?: {
		url: string
	}
	tags?: string[]
	recurring?: boolean
	interval?: string
	interval_count?: number
	published?: boolean
	user_id?: number
	user?: UserType
	related_products?: ProductType[]
	data?: any
}

export type ProductCollectionType = {
	id?: number
	label?: string
	handle?: string
	title?: string
	description?: string
	image?: {
		url: string
	}
	tags?: string[]
	published?: boolean
	data?: any
	products?: ProductType[]
}

export type OrderLineItemType = {
	id?: number
	cart_id?: number
	product_id: number
	product?: ProductType
	quantity: number
	product_data?: {
		handle?: string
		title?: string
		description?: string
		price?: number
		image_url?: string
	}
}

export type OrderType = {
	id?: number
	status?: string
	cart_token?: string
	number?: number
	display_number?: string
	user_id?: number
	user: UserType
	order_line_items: OrderLineItemType[]
	total_amount?: number
	subtotal_amount?: number
	tax_amount?: number
	shipping_amount?: number
	discount_amount?: number
	display_total?: string
	display_subtotal?: string
	customer_email?: string
	customer_phone?: string
	customer_name?: string
	shipping_address?: string
	address1?: string
	address2?: string
	city?: string
	state?: string
	country?: string
	zipcode?: string
	lat?: number
	lng?: number
	stripe_data?: any
}
