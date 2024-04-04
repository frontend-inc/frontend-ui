export type ActionType = {
  id?: number
  label: string
  name: 'webhook' | 'navigate' | 'url' 
  color?: string
  variant?: 'contained' | 'outlined' | 'text'  
  page_id?: number
  component_id?: number
  url?: string  
}