import React, { useEffect, useState } from 'react'
import { useGooglePlaces } from '../../../../hooks'
import { TextInput, GoogleMap, Icon } from '../../..'
import { TextInputPropsType } from '../../../../types'
import { useDebounce } from 'use-debounce'
import {
	Stack,
	Box,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'

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
		width = 360,
		zoom = 16,
		darkTheme = false,
		enablePosition = false,
		lat,
		lng,
	} = props || {}

	const { loading, places, fetchPlaces } = useGooglePlaces()

	const [keywords, setKeywords] = useState(value)
	const [debouncedValue] = useDebounce(keywords, 500)

	const handleKeywordChange = (ev) => {
		const { value } = ev.target
		setKeywords(value)
		if (options?.length > 0) setOpen(true)
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
		fetchPlaces(debouncedValue)
	}, [debouncedValue])

	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState([])

	useEffect(() => {
		if (places && places?.length > 0) {
			setOptions(
        //@ts-ignore
				places?.map((place) => ({        
					label: place?.displayName?.text,          
					value: place?.formattedAddress,
				}))
			)
		} else {
			setOpen(false)
		}
	}, [places])

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
				options={options}
				handleChange={handleKeywordChange}
				direction={direction}
				placeholder={placeholder}
			/>
			<Box sx={sx.anchor}>
				{open && (
					<Paper
						sx={{
							...sx.container,
							height: ((options?.length || 0) * 64),
						}}
						elevation={2}
					>
						<List dense disablePadding sx={sx.list}>
							{options?.map((option, index) => (
								<ListItem disableGutters>
									<ListItemButton
										sx={sx.listItemButton}
										onClick={() => handleClick(option)}
									>
										<ListItemIcon>
											<Icon name="MapPin" size={20} />
										</ListItemIcon>
										<ListItemText
											primary={option.label}
											secondary={option.value}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Paper>
				)}
				{enablePosition == true && (
					<Stack direction="row" spacing={1} alignItems="center">
						<Icon name="MapPin" size={20} />
						<Typography variant="overline" color="text.secondary">
							Lat: {lat}
						</Typography>
						<Typography variant="overline" color="text.secondary">
							Lng: {lng}
						</Typography>
					</Stack>
				)}
			</Box>
		</Stack>
	)
}
export default LocationInput

const sx = {
	anchor: {
		position: 'relative',
	},
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		height: '100% !important',
		maxHeight: '240px',
		overflowY: 'scroll',
    zIndex: theme => theme.zIndex.modal,
	},
	list: {
		bgcolor: 'background.paper',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		width: '100%',
		zIndex: 1,
	},
	listItemButton: {
		px: 1,
		py: 0,
	},
	mapContainer: {
		overflow: 'hidden',
	},
}
