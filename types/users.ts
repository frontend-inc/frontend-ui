import { Storage } from '../types'

export type User = {
	id?: number
	first_name?: string
	last_name?: string
	email: string
	token?: string
	image?: Storage
}
