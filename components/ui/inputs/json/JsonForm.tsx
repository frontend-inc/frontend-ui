import React from 'react'
import { Stack } from '@mui/material'
import {
	ArrayInput,
	Autosuggest,
	TabsSwitchInput,
	RatingInput,
	TextInput,
  ImageInput 
} from 'frontend-ui/components'

type JsonFormProps = {
	index: number
	item: any
	handleChange: any
	fields: any
	direction?: 'row' | 'column'
	appId: string
	collectionId: string
	foreignCollectionId: string
}

const JsonForm: React.FC<JsonFormProps> = (props) => {
	const {
		item,
		handleChange,
		fields,
		direction = 'column',
	} = props

	return (
		<Stack direction={direction} spacing={1} sx={sx.root}>
			{fields.map((field, i) => (
					<>
						{field?.type === 'boolean' && (
							<TabsSwitchInput
								label={field.label}
								name={field.name}
								value={item[field.name]}
								handleChange={handleChange}
							/>
						)}

						{field?.type === 'string' && (
              <TextInput
                label={field.label}
                direction={field.direction}
                name={field.name}
                value={item[field.name]}
                placeholder={field.placeholder}
                //@ts-ignore
                handleChange={handleChange}
              />
						)}

						{field?.type === 'array' && (
							<ArrayInput
								label={field.label}
								name={field.name}
								value={item[field.name] || []}
								placeholder={field.placeholder}
								direction={direction}
								//@ts-ignore
								handleChange={handleChange}
							/>
						)}

						{field?.type === 'text' && (
              <TextInput
                multiline
                rows={6}
                label={field.label}
                direction={field.direction}
                name={field.name}
                value={item[field.name]}
                placeholder={field.placeholder}
                //@ts-ignore
                handleChange={handleChange}
              />
						)}

						{field?.type === 'number' && (
							<TextInput
								type="number"
								name={field.name}
								label={field.label}
								direction={field.direction}
								value={item[field.name]}
								placeholder={field.placeholder}
								//@ts-ignore
								handleChange={handleChange}
							/>
						)}

						{field?.type === 'select' && (
							<Autosuggest
								label={field.label}
								direction={field.direction}
								name={field.name}
								value={item[field.name]}
								placeholder={field.placeholder}
								handleChange={handleChange}
								options={field.options}
							/>
						)}

						{field?.type === 'image' && (
							<ImageInput
								label={field.label}
								direction={field.direction}
								name={field.name}
								value={item[field.name]}
								placeholder={field.placeholder}
								//@ts-ignore
								handleChange={handleChange}
							/>
						)}

						{field?.type === 'rating' && (
							<RatingInput
								label={field.label}
								direction={field.direction}
								name={field.name}
								value={item[field.name]}
								placeholder={field.placeholder}
								//@ts-ignore
								handleChange={handleChange}
							/>
						)}
					</>				
			))}
		</Stack>
	)
}

export default JsonForm

const sx = {
	root: {
		width: '100%',
	},
	input: {
		flexDirection: 'column',
	},
	listItemIcon: {
		minWidth: 32,
		alignItems: 'flex-start',
	},
}
