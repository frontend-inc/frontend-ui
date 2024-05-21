import { UserType } from "./users"

export type CreditCardType = {
  id: number
  user_id: number
  user?: UserType
  exp_month: number
  exp_year: number
  last_4: number 
  brand: string
}