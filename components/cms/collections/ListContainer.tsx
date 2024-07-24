import React from 'react'
import { Query } from '../..'
import { ResourceProvider } from 'frontend-js'

export type ListContainerProps = {
	url: string
  name: string 
	query?: any  
	children: React.ReactNode
}

const ListContainer: React.FC<ListContainerProps> = (props) => {
	
  const {
		url,
    name='document',
    query={},
		children,		
	} = props

	return (
		<ResourceProvider name={ name } url={url}>
			<Query query={query}>
				{children}
			</Query>
		</ResourceProvider>
	)
}  

export default ListContainer
