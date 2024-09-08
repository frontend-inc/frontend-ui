import { UserType } from './users'

export type ProductType = {
  id?: number
  label?: string
  handle?: string
  title?: string
  description?: string
  price?: number
  compare_at_price?: number  
  available_for_sale?: boolean
  image?: {
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