import { StorageType } from '../types'

export type UserType = {
	id?: number
	first_name?: string
	last_name?: string
	email: string
	token?: string
	role?: string
	team_id?: number
	team_role?: string
	image?: StorageType
}
