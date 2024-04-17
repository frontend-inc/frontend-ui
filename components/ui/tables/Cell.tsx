import React from 'react'
import { Box } from '@mui/material'
import {
	CellArray,
	CellBoolean,
	CellDate,
	CellEnum,
	CellHABTM,
	CellImage,
	CellJSON,
	CellLabel,
	CellLink,
	CellString,
	CellText,
	CellPublished,
	CellPrice,
	CellRating,
	CellVideo,
} from '../../../components'

type CellProps = {
	field: any
	row: any
	value: any
	handleClick: (value: any, row?: any, field?: any) => void
}

const Cell: React.FC<CellProps> = (props) => {
	let { field, row, value, handleClick } = props

	const componentMapper = {
		array: CellArray,
		boolean: CellBoolean,
		date: CellDate,
		datetime: CellDate,
		image: CellImage,
		video: CellVideo,
		json: CellJSON,
		url: CellLink,
		rating: CellRating,
		number: CellString,
		text: CellText,
		price: CellPrice,
		shopify_product: CellText,
		shopify_collection: CellText,
		habtm: CellHABTM,
		string: CellString,
		select: CellEnum,
	}

	const CellComponent = componentMapper[field.variant]

	return (
		<CellComponent
			value={value}
			row={row}
			field={field}
			handleClick={handleClick}
		/>
	)
}

export default Cell
