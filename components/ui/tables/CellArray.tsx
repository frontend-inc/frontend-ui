import React, { useEffect, useState } from 'react'
import { Stack, Button } from '@mui/material'
import { Label } from '../../../components'

type CellArrayProps = {
	value: string[]
}

const CellArray: React.FC<CellArrayProps> = (props) => {
	const { value } = props
	const values = value?.length > 0 ? value : null

  const MAX_TAGS = 2 

	const [open, setOpen] = useState(false)
	const [visibleTags, setVisibleTags] = useState<string[]>([])

	const handleToggleSeeAll = () => {
		if (open) {
			setOpen(false)
			setVisibleTags(values.slice(0, MAX_TAGS))
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
		<Stack direction="row" spacing={0.5}>
			{visibleTags?.map((value, index) => (
				<Label key={index} label={value} />
			))}
			{!open &&  visibleTags?.length > MAX_TAGS && (
        <Button sx={ sx.button } onClick={handleToggleSeeAll}>
          <Label             
            label={`...`} 
          />				
        </Button> 				
			)}
		</Stack>
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
		height: '26px',
	},
}
