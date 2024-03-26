import React, { useEffect, useState } from 'react'
import { Button, Box } from '@mui/material'
import { Label } from '../../../components'

type CellArrayProps = {
	value: string[]
}

const CellArray: React.FC<CellArrayProps> = (props) => {
	const { value } = props
	const values = value?.length > 0 ? value : null

	const [open, setOpen] = useState(false)
	const [visibleTags, setVisibleTags] = useState<string[]>([])

	const handleToggleSeeAll = () => {
		if (open) {
			setOpen(false)
			setVisibleTags(values.slice(0, 2))
		} else {
			setOpen(true)
			setVisibleTags(values)
		}
	}

	useEffect(() => {
		if (values) {
			setVisibleTags(values.slice(0, 2))
		}
	}, [values])

	return (
		<Box sx={sx.root}>
			{visibleTags?.map((value, index) => (
				<Label key={index} label={value} />
			))}
			{!open && (
				<Button sx={sx.button} size="small" onClick={handleToggleSeeAll}>
					...
				</Button>
			)}
		</Box>
	)
}

export default CellArray

const sx = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '200px',
	},
	button: {
		p: 0,
		minWidth: '30px',
		height: '30px',
	},
}
