import React from 'react'
import { 
  AdminLayoutLeft, 
  MenuList,
  MenuListItem 
} from '../../../components'
import { AdminMenusType } from '../../../types'

type AdminMenuItemsProps = {
  menuItems: AdminMenusType
  activeMenu: string
  handleClick: (menuItem: any) => void
}

const AdminMenusItems: React.FC<AdminMenuItemsProps> = (props) => {
  
  const { menuItems={}, activeMenu, handleClick } = props || {}

  if(Object.keys(menuItems)?.length === 0) return null;
  return(
    <AdminLayoutLeft>
      { Object.keys(menuItems).map((key, index) => (
        <MenuList 
          label={ key }
          enableBorder={ index !== 0 }
        >
          {menuItems[key]?.map((menuItem) => (
            <MenuListItem
              key={menuItem.value}
              title={menuItem.label}
              icon={menuItem.icon}
              handleClick={() => handleClick(menuItem)}
              selected={activeMenu === menuItem.value}
            />
          ))}
        </MenuList>
      ))}
    </AdminLayoutLeft>
  )
}

export default AdminMenusItems