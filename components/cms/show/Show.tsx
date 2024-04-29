import React from 'react'
import { Stack } from '@mui/material'
import { ActionType, DocumentType } from '../../../types'
import Article from './Article'
import Item from './Item'
import Person from './Person'
import Details from '../details/Details'

export type ShowProps = {
	style: 'article' | 'person' | 'item'
	fields: any[]
	url: string
	enableBorder?: boolean
	actions?: ActionType[]
	resource: DocumentType
}

const Show: React.FC<ShowProps> = (props) => {
	const {
		style = 'item',
		fields,
		url,
		enableBorder,
		actions,
		resource,
	} = props || {}

  const components = {
    "item": Item,
    "article": Article,
    "person": Person
  }

  const Component = components[style]

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
      <Component
        resource={resource}
        actions={actions}
      />			
      { fields?.length > 0 && (
        <Details
          url={url}
          fields={fields}
          resource={resource}
          enableBorder={enableBorder}
        />
      )}
		</Stack>
	)
}

export default Show

const sx = {
	root: {
		width: '100%',
	},
}
