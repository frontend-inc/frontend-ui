'use client'

import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { RemixIcon } from '../../components'

type MenuButtonProps = {
  children?: React.ReactNode
  handleEdit?: false | ((item: any) => void)
  handleDelete?: false | ((item: any) => void)
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { children, handleEdit, handleDelete } = props

  const handleAction = (action: string) => {
    switch(action){
      case 'edit':
        //@ts-ignore
        handleEdit()
        break
      case 'delete':
        //@ts-ignore
        handleDelete()
        break
    }  
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          isIconOnly 
          aria-label='More options'
          variant="light"
          className="min-w-8 w-8 h-8"          
        >
          <RemixIcon name="ri-more-2-line" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu onAction={handleAction}>
        {children}
        {handleEdit && (
          <DropdownItem
            key='edit'
          >
            Edit
          </DropdownItem>
        )}
        {handleDelete && (
          <DropdownItem
            key='delete'
          >
            Delete
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

export default MenuButton
