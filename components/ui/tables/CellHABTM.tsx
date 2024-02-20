import React from 'react'
import { CellButton } from '../../../components'
import { CompareArrows } from '@mui/icons-material'

type CellHABTMProps = {
	value: string
	field: any
	row: any
	handleClick: (value: any, field?: any, row?: any) => void
}

const CellHABTM: React.FC<CellHABTMProps> = (props) => {
	const { value: links, field, handleClick } = props

	let text = `${links?.length || 0} ${field?.foreign_collection?.plural_name}`

	return (
		<CellButton handleClick={handleClick} icon={<CompareArrows />}>
			{text}
		</CellButton>
	)
}

export default CellHABTM
