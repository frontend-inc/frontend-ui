import { UserType } from './users'

export type CreditCardType = {
	id: number
	user_id: number
	user?: UserType
	exp_month: number
	exp_year: number
	last_4: number
	brand: string
}

export type SubscriptionPlanType = {
	id: number
	label?: string
	name: string
	description: string
	price: number
	display_price: string
	free_trial?: boolean
	free_trial_days?: number
	recurring: string
	recurring_interval: string
	stripe_id: string
	features: string[]
}
