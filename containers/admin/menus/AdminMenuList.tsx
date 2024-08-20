import React, { useState } from 'react'
import { Drawer, Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMenuItem, AdminMenuLinkList } from '../../../containers'
import { AdminMenuType } from '../../../types'

const AdminMenuList = () => {

  const { apiUrl } = useAdmin()
	const [open, setOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState<AdminMenuType>()

	const handleClick = (menu) => {
		setActiveMenu(menu)
		setOpen(true)
	}

  return(
    <>
      <Resources
        sortable
        enableBorder
        url={`${apiUrl}/menus`}
        name="menu"
        enableCreate
        enableEdit
        enableSearch
        enableDelete
        handleClick={handleClick}
        query={{
          sort_by: 'position',
          sort_direction: 'asc',
        }}
        fields={[
          {
            label: 'Label',
            name: 'label',
            variant: 'string',
            placeholder: 'Label',
          },
          {
            label: 'API name',
            name: 'name',
            variant: 'nospace',
            placeholder: 'Name',
          },
        ]}
        component={AdminMenuItem}
        emptyIcon="FolderTree"
        emptyTitle="No menus"
        emptyDescription="No menus yet."
      />
      <Drawer
        open={open}
        handleClose={() => setOpen(false)}
        title={activeMenu?.label}
      >
        { activeMenu?.id && (
          <AdminMenuLinkList 
            menuId={activeMenu?.id} 
            handleClick={handleClick} 
          />        
        )}
      </Drawer>
    </>
  )
}
export default AdminMenuList