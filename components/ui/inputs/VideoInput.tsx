import React from 'react'
import { CellVideo } from '../..'
import { Box, Button } from '@mui/material'
import { TextInput } from '../..'
import { Search } from 'lucide-react'
import { SyntheticEventType } from '../../../types'

type VideoInputProps = {
	name: string
	label: string
	value: {
    url: string
  }
	handleChange: (e: SyntheticEventType) => void
	handleBrowse: (name: string) => void
	placeholder?: string
	errors?: string
}

const VideoInput: React.FC<VideoInputProps> = (props) => {
	const {
		name,
		label,
		value,
		handleChange,
		handleBrowse,
		placeholder,
		errors,
	} = props

	return (
		<Box>
			<CellVideo value={value} />
			<TextInput
				name={name}
				value={value}
				handleChange={handleChange}
				placeholder={placeholder}
				errors={errors}
			/>
			<Button
				sx={sx.button}
				size="small"
				variant="outlined"
				onClick={() => handleBrowse(name)}
				startIcon={<Search />}
			>
				Browse
			</Button>
		</Box>
	)
}

export default VideoInput

const sx = {
	button: {
		color: 'text.secondary',
		mt: 0.5,
	},
}
