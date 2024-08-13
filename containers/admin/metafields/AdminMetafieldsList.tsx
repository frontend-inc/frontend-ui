import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMetafieldItem } from '../..'

const AdminMetafieldsList = () => {

  const { apiUrl } = useAdmin()

  return(
    <ResourceList
      sortable
      url={`${apiUrl}/metafields`}
      name="metafield"
      enableCreate
      enableEdit
      enableSearch
      enableDelete
      query={{
        sort_by: 'position',
        sort_direction: 'asc',
      }}
      filterOptions={[
        {
          label: 'Type',
          field: 'variant',
          variant: 'multiple_choice',
          options: [
            { label: 'String', value: 'string' },
            { label: 'Text', value: 'text' },
            { label: 'Number', value: 'number' },
            { label: 'Price', value: 'price' },
          ],
        },
      ]}
      fields={[
        { label: 'Label', name: 'label', variant: 'string' },
        { label: 'API name', name: 'name', variant: 'nospace' },
        {
          label: 'Type',
          name: 'variant',
          variant: 'select',
          options: [
            { icon: 'List', value: 'array', label: 'Array' },
            { icon: 'MenuSquare', value: 'select', label: 'Select' },
            { icon: 'Type', value: 'string', label: 'String' },
            { icon: 'FileText', value: 'text', label: 'Text' },
            { icon: 'Hash', value: 'number', label: 'Number' },
            { icon: 'Star', value: 'rating', label: 'Rating' },
            { icon: 'Link', value: 'url', label: 'URL' },
            { icon: 'DollarSign', value: 'price', label: 'Price' },
          ],
        },
        {
          label: 'Options',
          name: 'options',
          variant: 'array',
          conditions: [
            { name: 'variant', operator: 'eq', value: 'select' },
          ],
        },
      ]}
      component={AdminMetafieldItem}
      emptyIcon="MessageSquare"
      emptyTitle="No metafields"
      emptyDescription="No metafields yet."
    /> 
  )
}

export default AdminMetafieldsList 