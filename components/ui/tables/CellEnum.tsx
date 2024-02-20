import React from 'react'
import { Label } from '../../../components'
import { truncate } from '../../../helpers'

type CellEnumProps = {
	value: string
}

const CellEnum: React.FC<CellEnumProps> = (props) => {
	const { value } = props
	return <Label label={truncate(value, 15)} />
}

export default CellEnum
