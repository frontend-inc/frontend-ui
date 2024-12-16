'use client'

import React from 'react'
import { Label } from '../../../components'

type CellLabelProps = {
	value: string
}

const CellLabel: React.FC<CellLabelProps> = (props) => {
	const { value } = props
	return <Label>{ value }</Label>
}

export default CellLabel
