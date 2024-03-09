import React from 'react'
import { CellExpand, CellString, CellStringExpanded } from '../../../components'

type CellJSONProps = {
	value: any
	handleClick?: () => void
}

const CellJSON: React.FC<CellJSONProps> = (props) => {
	const { value } = props

	let formattedValue = value
	if (typeof value === 'object') {
		formattedValue = JSON.stringify(value)
	}

	return (
		<CellExpand
			cell={<CellString value={formattedValue} />}
			cellExpanded={
				<CellStringExpanded value={JSON.stringify(value, null, 2)} />
			}
		/>
	)
}

export default CellJSON
