import React, { useState } from 'react'
import { Drawer, ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMenuItem, AdminMenuLinkItem } from '../../../containers'

const AdminMenuList = () => {

  const { apiUrl } = useAdmin()
	const [open, setOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState()

	const handleClick = (menu) => {
		setActiveMenu(menu)
		setOpen(true)
	}

  return(
    <>
      <ResourceList
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
        <ResourceList
          direction='column'
          sortable
          enableBorder
          url={`${apiUrl}/menus/${activeMenu?.id}/links`}
          name="link"
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
              label: 'Name',
              name: 'name',
              variant: 'string',
              placeholder: 'Link name',
            },
            { 
              label: 'Link type',
              name: 'link_type',
              variant: 'select',
              options: [
                { value: 'page', label: 'Page', icon: 'StickyNote' },
                { value: 'url', label: 'URL', icon: 'ExternalLink' },              
              ]
            },
            {
              label: 'URL',
              name: 'url',
              variant: 'string',
              placeholder: 'URL',
              conditions: [
                { name: 'link_type', operator: 'eq', value: 'url' }
              ]
            },            
            {
              label: 'Page',
              name: 'page_id',
              variant: 'autosuggest',
              placeholder: 'Select page',
              displayField: 'name',
              url: `${apiUrl}/pages`,
              query: {},
              conditions: [
                { name: 'link_type', operator: 'eq', value: 'page' }
              ]
            },
          ]}
          component={AdminMenuLinkItem}
          emptyIcon="FolderTree"
          emptyTitle="No menus"
          emptyDescription="No menus yet."
        />
      </Drawer>
    </>
  )
}
export default AdminMenuList