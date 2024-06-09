import { StorageType } from '../types'

export type UserType = {
	id?: number
  username?: string
  name: string 
	first_name: string
	last_name: string
	email: string
  bio?: string
  avatar?: {
    url: string  
  }
	token?: string
	paid?: boolean
	role?: string
	team_id?: number
	team_role?: string
	image?: StorageType
}
