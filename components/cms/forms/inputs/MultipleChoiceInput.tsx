import React, { useEffect, useState } from 'react'
import { FormControl, List, Stack, Typography } from '@mui/material'
import { SelectableListItem } from '../../..'

export type MultipleChoiceInputProps = {
	label?: string
	direction?: 'row' | 'column'
	name: string
	value?: any
	options: any[]
	buttonText?: string
	handleChange: (e: any) => void
	multiSelect?: boolean
}

const MultipleChoiceInput: React.FC<MultipleChoiceInputProps> = (props) => {
	const {
		label,
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
		<FormControl size="small" fullWidth variant="outlined">
			<Stack
				sx={{
					...sx.stack,
					...(direction == 'row' && sx.stackVertical),
				}}
				direction={direction}
				spacing={1}
			>
				<Typography variant="caption" sx={sx.label} gutterBottom>
					{label}
				</Typography>
				<List disablePadding sx={sx.list}>
					{options?.map((option, idx) => (
						<SelectableListItem
							key={idx}
							title={option.label}
							icon={option.icon}
							image={option.image}
							selected={selected.find((i) => i === option.value)}
							handleClick={() => handleSelect(option?.value)}
						/>
					))}
				</List>
			</Stack>
		</FormControl>
	)
}

export default MultipleChoiceInput

const sx = {
	list: {
		width: '100%',
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
