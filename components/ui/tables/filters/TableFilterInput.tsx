'use client'

import React from 'react'
import {
	BOOLEAN_OPTIONS,
	BOOLEAN_FIELDS,
	DATE_FIELDS,
	STRING_FIELDS,
	SELECT_FIELDS,
	NUMBER_FIELDS,
	DATE_RANGE_OPTIONS,
	FILTER_OPERATORS,
} from '../../../../constants/index'
import { X } from 'lucide-react'
import {
	TextInput,
	SelectInput,
	Autosuggest,
	ArrayInput,
} from '../../../../components'
import { Divider, Button } from '@nextui-org/react'
import { FilterOptionType, SyntheticEventType } from '../../../../types'
import TableWhereInput from './TableWhereInput'

type FilternameProps = {
	index: number
	filter: FilterOptionType
	fieldOptions: {
		label: string
		value: string
	}[]
	handleChange: (e: SyntheticEventType, index: number) => void
	handleRemove: (index: number) => void
}

const FilternameWrapper: React.FC<FilternameProps> = ({
	index,
	filter,
	fieldOptions,
	handleChange,
	handleRemove,
}) => {
	let name
	let operatorOptions: { value: string; label: string }[] = []

	if (filter.name) {
		name = fieldOptions.find((f) => f.value == filter.name)
		//@ts-ignore
		operatorOptions = FILTER_OPERATORS[name?.db_type || 'integer']
	}

	return (
		<>
			<Separator />
			<div className="flex flex-row justify-start items-start">
				<div>
					<div className="flex flex-col space-y-2">
						<div className="flex flex-row space-x-2">
							<SelectInput
								name="name"
								options={fieldOptions}
								placeholder="name"
								value={filter?.name || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
							{filter?.name && (
								<SelectInput
									name="operator"
									placeholder="…"
									options={operatorOptions}
									value={filter?.operator || ''}
									handleChange={(ev) => handleChange(ev, index)}
								/>
							)}
						</div>
						{BOOLEAN_FIELDS.includes(name?.db_type) && (
							<SelectInput
								name="value"
								placeholder="true or false"
								options={BOOLEAN_OPTIONS}
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}

						{DATE_FIELDS.includes(name?.variant) && (
							<>
								{['gte', 'lte'].includes(filter?.operator) ? (
									<SelectInput
										name="value"
										placeholder="date since"
										options={DATE_RANGE_OPTIONS}
										value={filter?.value || ''}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								) : (
									<TextInput
										type="date"
										name="value"
										placeholder="value"
										value={filter?.value || ''}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								)}
							</>
						)}

						{NUMBER_FIELDS.includes(name?.variant) && (
							<>
								{['in', 'nin'].includes(filter?.operator) ? (
									<ArrayInput
										name="value"
										placeholder="values"
										value={Array.isArray(filter?.value) ? filter?.value : []}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								) : (
									<TextInput
										type="number"
										name="value"
										placeholder="value"
										value={filter?.value || ''}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								)}
							</>
						)}

						{STRING_FIELDS.includes(name?.variant) && (
							<TextInput
								name="value"
								placeholder="value"
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}

						{SELECT_FIELDS.includes(name?.variant) && (
							<Autosuggest
								name="value"
								placeholder="Select..."
								options={name?.options?.map((opt) => ({
									label: opt,
									value: opt,
								}))}
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}
					</div>
				</div>
				<div className="mt-1 pr-2">
					<Button isIconOnly onPress={() => handleRemove(index)}>
						<X className="w-5 h-5 text-foreground" />
					</Button>
				</div>
			</div>
		</>
	)
}

export default FilternameWrapper
