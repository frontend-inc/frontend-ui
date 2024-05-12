import { UserType, StorageType } from '../types'

export type TeamType = {
	id?: number
	name: string
	color: string
	image: StorageType
}

export type TeamUserType = {
	id?: number
	user_id: number
	team_id: number
	team: TeamType
	user: UserType
	role: string
}
