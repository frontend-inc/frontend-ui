'use client'

import React from 'react'
import { Badge } from '../../../components'

type CellBooleanProps = {
	value: boolean
}

const CellBoolean: React.FC<CellBooleanProps> = (props) => {
	const { value } = props
	return(
    <Badge>
      {value ? 'True' : 'False'}
    </Badge>
  )
}

export default CellBoolean
