import React from 'react'
import { Stack } from '@mui/material'
import { DocumentType } from '../../../types'
import Article from './Article'
import Item from './Item'
import Person from './Person'
import Details from '../details/Details'

type ShowProps = {
  style: 'article' | 'person' | 'item'
  fields: any[]
	url: string	
	enableBorder?: boolean
	resource: DocumentType
}

const Show: React.FC<ShowProps> = (props) => {
	const { 
    style='item', 
    fields,
    url,
    enableBorder,
    resource 
  } = props || {}	

	return (
		<Stack direction="column" spacing={4} sx={ sx.root }>
      { style == 'item' && (
        <Item resource={ resource } />
      )}
      { style == 'article' && (
        <Article resource={ resource } />
      )}
      { style == 'person' && (
        <Person resource={ resource } />
      )}
      <Details 
        url={ url }
        fields={ fields } 
        resource={ resource }
        enableBorder={ enableBorder }
      />
    </Stack>
	)
}

export default Show

const sx = {
	root: {
		width: '100%',
	}
}
