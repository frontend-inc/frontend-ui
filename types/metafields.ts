export type MetafieldVariantType = 
  'array' | 
  'string' | 
  'text' | 
  'number' |
  'float' |
  'boolean' |
  'price' | 
  'url' |
  'rating'  

export type MetafieldType = {
  label: string
  name: string
  variant: MetafieldVariantType 
  options: string[]
}