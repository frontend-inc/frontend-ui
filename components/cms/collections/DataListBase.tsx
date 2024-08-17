import React from 'react'
import { DataFetcher } from '../..'
import { ResourceProvider } from 'frontend-js'

export type DataListProps = {
	query: any
	url: string
	name: string
	header: React.ReactNode
	list: React.ReactNode
	show: React.ReactNode
	edit: React.ReactNode
	destroy: React.ReactNode
}

const DataListBase: React.FC<DataListProps> = (props) => {
	const {
		url,
		name,
		query,
		header,
		list,
		show,
		edit,
		destroy, // delete is a reserved word
	} = props

	return (
		<ResourceProvider name={name} url={url}>
			<DataFetcher query={query}>
				{header && header}
				{list && list}
				{show && show}
				{edit && edit}
				{destroy && destroy}
			</DataFetcher>
		</ResourceProvider>
	)
}

export default DataListBase
