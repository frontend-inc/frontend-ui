import { UserType } from './users'

export type LineItemType = {
  id?: number
  cart_id?: number
  product_id: number  
  product?: ProductType
  quantity: number
}

export type CartType = {
  id?: number
  uid?: string
  user_id?: number  
  line_items: LineItemType[]
  subtotal?: number
  user?: UserType
}

export type ProductType = {
	id?: number
	label?: string
	handle?: string
	title?: string
	description?: string
	price?: number
	compare_at_price?: number
  display_price?: string
  display_compare_at_price?: string
	available_for_sale?: boolean
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
