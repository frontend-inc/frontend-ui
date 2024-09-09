import React from 'react'
import {
	CellArray,
	CellBoolean,
	CellDate,
	CellEnum,
	CellFile,
	CellHABTM,
	CellImage,
	CellJSON,
	CellLink,
	CellLocation,
	CellString,
	CellShopify,
	CellText,
	CellPrice,
	CellRating,
	CellVideo,
	CellUser,
	CellTeam,
} from '../../../components'

type CellProps = {
	field: any
	row: any
	value: any
	handleClick?: (value: any, row: any, field: any) => void
}

const Cell: React.FC<CellProps> = (props) => {
	let { field, row, value, handleClick } = props

	const componentMapper = {
		array: CellArray,
		boolean: CellBoolean,
		date: CellDate,
		datetime: CellDate,
		email: CellString,
		phone: CellString,
		image: CellImage,
		video: CellVideo,
		json: CellJSON,
		url: CellLink,
		rating: CellRating,
		number: CellString,
		text: CellText,
		location: CellLocation,
		price: CellPrice,
		shopify: CellShopify,
		habtm: CellHABTM,
		string: CellString,
		select: CellEnum,
		user: CellUser,
		team: CellTeam,
		file: CellFile,
		shopify_products: CellArray,
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
