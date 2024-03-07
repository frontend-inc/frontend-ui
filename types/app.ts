export type MenuLink = {
	label: string
	path: string
  url?: string
	icon?: string
  position: number
  children?: MenuLink[]
}

export type Notification = {
  text: string  
  path?: string   
  position: number
  buttonText?: string
  discountCode?: string
  copyToClipboard?: boolean
}