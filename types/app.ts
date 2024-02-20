export type Link = {
  name: string 
  path: string    
  position: number
  sublinks: Link[]
}

export type Notification = {
  text: string  
  path?: string   
  position: number
  buttonText?: string
  discountCode?: string
  copyToClipboard?: boolean
}