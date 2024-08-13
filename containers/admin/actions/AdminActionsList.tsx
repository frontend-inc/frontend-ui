import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { ResourceList, Drawer } from '../../../components'
import { useAdmin } from '../../../hooks'
import { 
  AdminActionItem, 
  AdminZapItem 
} from '../../../containers'
import { ACTION_TYPES, ZAP_TYPES } from '../../../constants'

const AdminActionsList: React.FC = () => {

  const { apiUrl } = useAdmin()

	const [open, setOpen] = useState(false)
	const [activeAction, setActiveAction] = useState()

	const handleClick = (action) => {
		setActiveAction(action)
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

  return(
    <Stack p={2} direction="column" spacing={2}>
      <ResourceList
        url={`${apiUrl}/actions`}
        name="app_action"
        enableSearch
        enableCreate
        enableEdit
        enableDelete
        query={{
          sort_by: 'action_type',
          sort_direction: 'asc',
        }}
        filterOptions={[
          {
            label: 'Type',
            field: 'action_type',
            variant: 'multiple_choice',
            options: ACTION_TYPES,
          },
        ]}
        fields={[
          {
            label: 'Label',
            name: 'label',
            variant: 'string',
          },
          {
            label: 'API name',
            name: 'name',
            variant: 'nospace',
          },
          {
            label: 'Action',
            name: 'action_type',
            variant: 'select',
            options: ACTION_TYPES,
          },
          {
            label: 'Collection',
            name: 'collection_id',
            variant: 'autosuggest',
            displayField: 'name',
            url: `${apiUrl}/collections`,
            query: {},
            conditions: [
              {
                name: 'action_type',
                operator: 'in',
                value: [
                  'resources.create',
                  'resources.save',
                  'resources.delete',
                ],
              },
            ],
          },
        ]}
        handleClick={handleClick}
        component={AdminActionItem}
        emptyIcon="Hook"
        emptyTitle="No actions"
        emptyDescription="No actions yet."
      />
      <Drawer open={open} handleClose={handleClose}>
        <ResourceList
          sortable
          enableBorder
          direction="column"
          url={`${apiUrl}/actions/${activeAction?.id}/zaps`}
          name="zap"
          enableSearch
          enableCreate
          enableEdit
          enableDelete
          query={{
            sort_by: 'position',
            sort_direction: 'asc',
          }}
          fields={[
            {
              label: 'Zap',
              name: 'zap_type',
              variant: 'select',
              options: ZAP_TYPES,
            },
            {
              label: 'Post URL',
              name: 'url',
              variant: 'string',
              conditions: [
                {
                  name: 'zap_type',
                  operator: 'eq',
                  value: 'webhook',
                },
              ],
            },
            {
              label: 'Email',
              name: 'email_id',
              variant: 'autosuggest',
              displayField: 'name',
              url: `${apiUrl}/emails`,
              query: {
                filters: {
                  AND: [
                    { internal: { eq: false } },
                  ]
                }
              },
              conditions: [
                {
                  name: 'zap_type',
                  operator: 'eq',
                  value: 'email',
                },
              ],
            },
          ]}
          component={AdminZapItem}
          emptyIcon="Zap"
          emptyTitle="No zaps"
          emptyDescription="No zaps yet."
        />
      </Drawer>
    </Stack>
  )
}

export default AdminActionsList