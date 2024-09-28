import React, { useEffect, useState } from 'react'
import { Box, List, Stack, Typography } from '@mui/material'
import { ResourceListItem, ResourceGridItem } from '../../..'
import { AnswerType } from '../../../../types'

export type MultipleChoiceAnswerInputProps = {
	label?: string
	layout?: 'list' | 'grid'
	direction?: 'row' | 'column'
	name: string
	value?: any
	answers: AnswerType[]
	handleChange: (e: any) => void
	multiSelect?: boolean
}

const MultipleChoiceAnswerInput: React.FC<MultipleChoiceAnswerInputProps> = (
	props
) => {
	const {
		label,
		layout = 'list',
		multiSelect = true,
		direction = 'column',
		name,
		value,
		handleChange,
		answers = [],
	} = props

	const [selected, setSelected] = useState(value || [])

	const handleSelect = (value) => {
		if (Array.isArray(selected) && selected.find((i) => i === value)) {
			setSelected(selected.filter((i) => i != value))
		} else {
			if (multiSelect) {
				setSelected(selected.concat(value))
			} else {
				setSelected([value])
			}
		}
	}

	useEffect(() => {
		if (Array.isArray(selected)) {
			handleChange({
				target: {
					name,
					value: selected || [],
				},
			})
		}
	}, [selected])

	return (
		<Stack sx={sx.stack} direction={direction} spacing={1}>
			<Typography variant="caption" sx={sx.label} gutterBottom>
				{label}
			</Typography>
			{layout === 'list' && (
				<List disablePadding sx={sx.list}>
					{answers?.map((answer, idx) => (
						<ResourceListItem
							enableBorder
							selected={selected?.includes(answer.value)}
							image={answer?.image?.url}
							primary={answer.title}
							secondary={answer.description}
							handleClick={() => handleSelect(answer.value)}
							slots={{
								image: {
									height: 120,
									width: 120,
								},
							}}
						/>
					))}
				</List>
			)}
			{layout == 'grid' && (
				<Box sx={sx.grid}>
					{answers?.map((answer, idx) => (
						<Box sx={sx.item} key={idx}>
							<ResourceGridItem
								enableBorder
								selected={selected?.includes(answer.value)}
								image={answer?.image?.url}
								primary={answer.title}
								secondary={answer.description}
								handleClick={() => handleSelect(answer.value)}
								slots={{
									image: {
										height: 120,
										width: 120,
									},
								}}
							/>
						</Box>
					))}
				</Box>
			)}
		</Stack>
	)
}

export default MultipleChoiceAnswerInput

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
