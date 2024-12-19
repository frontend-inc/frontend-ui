'use client'

import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from 'frontend-shadcn'
import { Button } from '../../components'
import { RemixIcon } from '../../components'

type MenuButtonProps = {
  children?: React.ReactNode
  icon?: string
  color?: string
  size?: 'small' | 'medium' | 'large'
  enableIcons?: boolean
  handleEdit?: false | ((item: any) => void)
  handleDelete?: false | ((item: any) => void)
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { children, handleEdit, handleDelete } = props

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <RemixIcon name="ri-more-2-line" className="text-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 bg-background w-[100px]">
        {children}
        {handleEdit && (
          <button
            className="flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
        {handleDelete && (
          <button
            className="flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default MenuButton
