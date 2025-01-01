'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { Label } from '../../../components'

type CellArrayProps = {
	value: string[]
}

const CellArray: React.FC<CellArrayProps> = (props) => {
	const { value } = props
	const values = value?.length > 0 ? value : null

	const MAX_TAGS = 2

	const [open, setOpen] = useState(false)
	const [visibleTags, setVisibleTags] = useState<string[] | null>([])

	const handleToggleSeeAll = () => {
		if (open) {
			setOpen(false)
			if (values) {
				setVisibleTags(values.slice(0, MAX_TAGS))
			}
		} else {
			setOpen(true)
			setVisibleTags(values)
		}
	}

	useEffect(() => {
		if (values) {
			setVisibleTags(values.slice(0, MAX_TAGS))
		}
	}, [values])

	return (
		<div className="flex flex-row gap-2">
			{visibleTags?.map((value, index) => (
				<Label key={index}>{ value }</Label>
			))}
			{!open && visibleTags && visibleTags?.length > MAX_TAGS && (
				<Button onPress={handleToggleSeeAll}>
					<Label>...</Label>
				</Button>
			)}
		</div>
	)
}

export default CellArray
