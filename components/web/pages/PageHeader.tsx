import React from 'react'
import { Stack, Box } from '@mui/material'
import { ActionType } from '../../../types'
import { Heading, Actions } from '../..'

export type PageHeaderProps = {
  label?: string
	title?: string 
  description?: string
  breadcrumbs?: any
	actions: ActionType[]
  resource?: any
  enableBorder?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	
  const { 
    label,
    title,
    description,
    breadcrumbs,
    actions,
    resource,
    enableBorder=false,
  } = props

  console.log("ACTIONS", actions)

	return (
    <Stack 
      direction={{
        xs: 'column',
        sm: 'row'
      }}         
      spacing={1} 
      sx={{ 
        ...sx.root,
        ...(enableBorder && sx.rootBorder ) 
      }}
    >
      <Heading 
        label={label}
        title={title}
        description={description}
        textAlign="left"
      />
      <Box sx={ sx.actions }>
        <Actions 
          actions={actions} 
          resource={resource}
        />
      </Box>
    </Stack>
  )
}

export default PageHeader

const sx = {
	root: {
    justifyContent: 'space-between',
		width: '100%',
		bgcolor: 'background.default',
	},
  rootBorder: {
    borderBottom: 1,
    borderColor: 'divider'
  },	
  actions: {
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'flex-end',
    py: 1
  }
}
