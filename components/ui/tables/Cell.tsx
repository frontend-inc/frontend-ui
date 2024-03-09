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
	return (
		<Box sx={sx.root}>
			{field.variant === 'boolean' && field?.name != 'published' && (
				<CellBoolean value={value} />
			)}

			{field.variant === 'boolean' && field?.name == 'published' && (
				<CellPublished value={value} />
			)}

			{field.variant === 'date' && <CellDate value={value} />}

			{field.variant === 'datetime' && <CellDate value={value} />}

			{field.variant === 'image' && (
				<CellImage value={value} handleClick={handleClick} />
			)}

			{field.variant === 'video' && (
				<CellVideo
					value={value}
					//@ts-ignore
					handleClick={handleClick}
				/>
			)}

			{field.variant === 'json' && <CellJSON value={value} />}

			{field.variant === 'url' && (
				<CellLink
					value={value}
					//@ts-ignore
					handleClick={handleClick}
				/>
			)}

			{field.variant === 'rating' && <CellRating value={value} />}

			{field.variant === 'text' && <CellText value={value} />}
			{field.variant === 'price' && <CellPrice value={value} />}
			{field.variant === 'shopify_product' && <CellText value={value} />}
			{field.variant === 'shopify_collection' && <CellText value={value} />}

			{value && field.variant === 'habtm' && (
				<CellHABTM
					value={value}
					row={row}
					field={field}
					handleClick={handleClick}
				/>
			)}

			{!field.array ? (
				<>
					{field.variant === 'string' && field?.name !== 'locale' && (
						<CellString value={value} />
					)}

					{field.variant === 'string' && field?.name == 'locale' && (
						<CellLabel value={value} />
					)}

					{field.variant === 'select' && <CellEnum value={value} />}
				</>
			) : (
				<CellArray value={value} />
			)}
		</Box>
	)
}

export default Cell

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	default: {
		fontWeight: 500,
		fontFamily: 'Roboto',
	},
}
