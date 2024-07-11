import React, { useEffect, useState } from 'react'
import { useGooglePlaces } from '../../../../hooks'
import { TextInput, GoogleMap, Icon } from '../../..'
import { TextInputPropsType } from '../../../../types'
import { useDebounce } from 'use-debounce'
import { Stack, Box, Typography } from '@mui/material'
import LocationOptionsList from './LocationOptionsList'

type LocationInputProps = TextInputPropsType & {
	enablePosition?: boolean
	lat?: number
	lng?: number
	height?: number
	width?: number
	zoom?: number
	darkTheme?: boolean
}

const LocationInput: React.FC<LocationInputProps> = (props) => {
	const {
		name = 'location',
		value = '',
		label,
		placeholder = 'Search location',
		handleChange,
		direction = 'column',
		height = 240,
		width = 320,
		zoom = 15,
		darkTheme = false,
		enablePosition = false,
		lat,
		lng,
	} = props || {}

	const { placeOptions, fetchPlaces } = useGooglePlaces()

	const [keywords, setKeywords] = useState(value)
	const [debouncedText] = useDebounce(keywords, 150)

	const handleKeywordChange = (ev) => {
		const { value } = ev.target
		setKeywords(value)
		if (placeOptions?.length > 0) setOpen(true)
	}

	const handleClick = (option) => {
		setOpen(false)
		setKeywords(option?.value)
		handleChange({
			target: {
				name: name,
				value: option?.value,
			},
		})
	}

	useEffect(() => {
		if (debouncedText?.length > 0) fetchPlaces(debouncedText)
	}, [debouncedText])

	const [open, setOpen] = useState(false)

	return (
		<Stack width={'100%'} direction="column" spacing={1}>
			{enablePosition && lat && lng && (
				<Box
					sx={{
						...sx.mapContainer,
						height,
						width,
					}}
				>
					<GoogleMap
						enableBorder
						darkTheme={darkTheme}
						height={height}
						width={width}
						zoom={zoom}
						resources={[{ lat, lng }]}
					/>
				</Box>
			)}
			<TextInput
				name={name}
				label={label}
				value={keywords}
				options={placeOptions}
				handleChange={handleKeywordChange}
				direction={direction}
				placeholder={placeholder}
			/>
			<LocationOptionsList
				open={open}
				options={placeOptions}
				handleClick={handleClick}
			/>
		</Stack>
	)
}
export default LocationInput

const sx = {
	mapContainer: {
		overflow: 'hidden',
	},
}
