'use client'

import React from 'react'
import { Label } from '../../../components'

type CellPublishedProps = {
	value: boolean
}

const CellPublished: React.FC<CellPublishedProps> = (props) => {
	const { value } = props
	return <Label>{value == true ? 'published' : 'unpublished'}</Label>
}

export default CellPublished
