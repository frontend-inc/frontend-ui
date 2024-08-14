export type AdminMenuType = {
  id?: number
  icon?: string
  label: string
  value: string
}

export type AdminMenusType = Record<string, AdminMenuType[]>