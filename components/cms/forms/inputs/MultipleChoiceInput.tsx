import React, { useEffect, useState } from 'react'
import { Box, List, Stack, Typography } from '@mui/material'
import { SelectableListItem } from '../../../../components'
import SelectableCardItem from './SelectableCardItem'

export type MultipleChoiceInputProps = {
	label?: string
	layout?: 'list' | 'grid'
	direction?: 'row' | 'column'
	name: string
	value?: any
	options: {
		label: string
		description: string
		value: string | number
		image: string
		icon?: string
	}[]
	handleChange: (e: any) => void
	multiSelect?: boolean
}

const MultipleChoiceInput: React.FC<MultipleChoiceInputProps> = (props) => {
	const {
		label,
		layout = 'list',
		direction = 'column',
		name,
		value,
		options,
		handleChange,
		multiSelect = true,
	} = props

	const [selected, setSelected] = useState(value || [])

	const handleSelect = (item) => {
		if (selected.find((i) => i === item)) {
			setSelected(selected.filter((i) => i != item))
		} else {
			if (multiSelect) {
				setSelected(selected.concat(item))
			} else {
				setSelected([item])
			}
		}
	}

	useEffect(() => {
		handleChange({
			target: {
				name,
				value: selected,
			},
		})
	}, [selected])

	return (
		<Stack sx={sx.stack} direction={direction} spacing={1}>
			<Typography variant="caption" sx={sx.label} gutterBottom>
				{label}
			</Typography>
			{layout === 'list' && (
				<List disablePadding sx={sx.list}>
					{options?.map((option, idx) => (
						<SelectableListItem
							key={idx}
							title={option.label}
							icon={option.icon}
							selected={selected.find((i) => i === option.value)}
							handleClick={() => handleSelect(option?.value)}
						/>
					))}
				</List>
			)}
			{layout == 'grid' && (
				<Box sx={sx.grid}>
					{options?.map((option, idx) => (
						<Box sx={sx.item} key={idx}>
							<SelectableCardItem
								title={option.label}
								image={option.image}
								description={option.description}
								selected={selected.find((i) => i === option.value)}
								handleClick={() => handleSelect(option?.value)}
							/>
						</Box>
					))}
				</Box>
			)}
		</Stack>
	)
}

export default MultipleChoiceInput

const sx = {
	list: {
		width: '100%',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '10px',
	},
	item: {
		width: '100%',
		gridColumn: 'span 1',
	},
	label: {
		mb: 0,
		minWidth: '100px',
		color: 'text.secondary',
	},
	stack: {
		width: '100%',
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
}
