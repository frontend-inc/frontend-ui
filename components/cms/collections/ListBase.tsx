import React from 'react'
import { Query } from '../..'
import { ResourceProvider } from 'frontend-js'

export type ListProps = {
  query: any,
  url: string 
  name: string 
  loadMore?: boolean
  header: React.ReactNode,
  list: React.ReactNode
  show: React.ReactNode
  edit: React.ReactNode
  destroy: React.ReactNode  
}

const List: React.FC<ListProps> = (props) => {
	const {
    url,
    name,
    query,
    header,
    loadMore=true,
    list,
    show,
    edit, 
    destroy // delete is a reserved word
	} = props

	return (
    <ResourceProvider name={ name } url={url}>
      <Query query={query} loadMore={loadMore}>
        { header && header }
        { list && list }
        { show && show }
        { edit && edit }
        { destroy && destroy }
		  </Query>
    </ResourceProvider>
	)
}

export default List
