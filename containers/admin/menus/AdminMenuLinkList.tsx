import React, { useState } from 'react'
import { Drawer, ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMenuLinkItem } from '../..'
import { AdminMenuType } from '@frontend-mui/types'

type AdminMenuListProps = {
  menuId: number
  handleClick: (menu: AdminMenuType) => void
}

const AdminMenuLinkList: React.FC<AdminMenuListProps> = (props) => {

  const { menuId, handleClick } = props || {}

  const { apiUrl } = useAdmin()

  return(
    <ResourceList
      direction='column'
      sortable
      enableBorder
      url={`${apiUrl}/menus/${menuId}/links`}
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
  )
}
export default AdminMenuLinkList