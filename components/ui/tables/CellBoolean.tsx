'use client'

import React from 'react'
import { Badge } from 'frontend-shadcn'

type CellBooleanProps = {
	value: boolean
}

const CellBoolean: React.FC<CellBooleanProps> = (props) => {
	const { value } = props
	return <Badge className="px-3 py-1">{value ? 'True' : 'False'}</Badge>
}

export default CellBoolean
