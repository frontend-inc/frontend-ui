import React, { useState, useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Table } from '../..'

type TableViewProps = any & {
	fields: Array<any>
	url: string
	handleClick?: (item: any) => void
	handleEditClick?: (item: any) => void
	actions?: any
}

const TableView: React.FC<TableViewProps> = (props) => {
	const [rows, setRows] = useState([])

	const { url, fields, handleClick, handleEditClick } = props

	const [activeField, setActiveField] = useState<any>()

	const {
		loading,
		findMany,
		resources,
		paginate,
		query,
		setQuery,
		page,
		perPage,
		numPages,
		totalCount,
	} = useResource({
		url,
	})

	const handleSearch = () => {
		findMany({
			...query,
			page: 1,
		})
	}

	const handleQueryChange = (ev) => {
		const { value, name } = ev.target
		setQuery({
			...query,
			[name]: value,
		})
	}

	const handleClearFilters = () => {
		findMany({
			...query,
			filters: {},
      sort_by: 'id',
      sort_direction: 'desc',
			keywords: '',
		})
	}

	const handleSort = (field) => {
		let sortDirection = query?.sort_by || 'desc'
		if (field?.name == activeField?.name) {
			if (query?.sort_direction == 'asc') {
				sortDirection = 'desc'
			} else {
				sortDirection = 'asc'
			}
		}
		findMany({
			...query,
			sort_by: field.name,
			//@ts-ignore
			sort_direction: sortDirection,
		})
		setActiveField(field)
	}

	const handleKeywordSearch = (keywords) => {
		findMany({
			...query,
			keywords: keywords,
			page: 1,
		})
	}

	const handlePaginate = async (ev, page) => {
		await paginate(page)
	}

	const formatRows = (resources) => {
		let newRows = resources.map((resource) => {
			let row = {}
			fields.forEach((field) => {
				if (['image', 'video'].includes(field?.variant)) {
					row[field.name] = resource[field.name]?.url
				} else {
					row[field.name] = resource?.data[field.name]
				}
			})
			return row
		})
		setRows(newRows)
	}

	useEffect(() => {
		if (url) {
			findMany()
		}
	}, [url])

	useEffect(() => {
		if (resources) {
			formatRows(resources)
		}
	}, [resources])

	return (
		<Table
			loading={resources && loading}
			fields={fields}
			rows={rows}
			handleClick={handleClick}
			handleEdit={handleEditClick}
			query={query}
			handleClearQuery={handleClearFilters}
			handleQueryChange={handleQueryChange}
			handleSearch={handleSearch}
			handleKeywordSearch={handleKeywordSearch}
			handleSort={handleSort}
			page={page}
			perPage={perPage}
			numPages={numPages}
			totalCount={totalCount}
			handlePaginate={handlePaginate}
		/>
	)
}

export default TableView
