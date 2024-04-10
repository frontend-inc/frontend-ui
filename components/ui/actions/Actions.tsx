import React from 'react'
import { Stack } from '@mui/material'
import ActionButton from './ActionButton'
import ActionMenuItem from './ActionMenuItem'
import { ActionType } from '../../../types'
import { MenuButton } from '../../../components'

type ActionsProps = {
	actions: ActionType[]
	resource: any
}

const Actions: React.FC<ActionsProps> = (props) => {
	const { 
    actions, 
    resource,     
  } = props

	return (
		<Stack sx={ sx.root } direction="row" spacing={1}>
      <Stack sx={ sx.buttons } direction={'row'} spacing={1}>
        {actions?.slice(0,2)?.map((action, index) => (
          <ActionButton
            key={index}
            color={index == 0 ? 'primary' : 'secondary'}
            action={action}
            resource={resource}
          />
        ))}
      </Stack>
      { actions?.length > 2 && (
      <MenuButton>
        { actions?.slice(2, actions.length)?.map((action, index) => (
          <ActionMenuItem 
            key={index}
            action={action}
            resource={resource}
          />                
        ))}
        </MenuButton>
      )}
		</Stack>
	)
}

export default Actions

const sx = {
  root: {
    width: '100%',
    justifyContent: 'center',
  },
  buttons: {
    width: '100%',
    justifyContent: 'center',
  }
}
