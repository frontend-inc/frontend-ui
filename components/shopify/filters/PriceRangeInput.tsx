import React from 'react'
import {
	Input,
	FormControl,
	Typography,
	Box,
	Slider,
	InputAdornment,
} from '@mui/material'

type PriceRangeInputProps = {
	value: any
	handleChange: any
	minPrice: number
	maxPrice: number
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = (props) => {
	const { value, handleChange, minPrice, maxPrice } = props || {}

	const onChange = (ev, newValue) => {
		handleChange(newValue)
	}

	const handleMinPriceChange = (ev) => {
		const { value: minPrice } = ev.target
		handleChange([minPrice, value[1]])
	}

	const handleMaxPriceChange = (ev) => {
		const { value: maxPrice } = ev.target
		handleChange([value[0], maxPrice])
	}

	return (
		<Box sx={sx.slider}>
			<Slider
				aria-label="Price range"
				defaultValue={[minPrice, maxPrice]}
				valueLabelDisplay="auto"
				onChange={onChange}
				step={10}
				min={minPrice}
				max={maxPrice}
				value={value}
			/>
			{value && (
				<Box sx={sx.priceInputs}>
					<FormControl variant="standard">
						<Input
							onChange={handleMinPriceChange}
							value={value[0]}
							startAdornment={
								<InputAdornment position="start">
									<Typography color="textPrimary" variant="body2">
										$
									</Typography>
								</InputAdornment>
							}
						/>
					</FormControl>
					<Box sx={sx.to}>
						<Typography variant="body2">to</Typography>
					</Box>
					<FormControl variant="standard">
						<Input
							value={value[1]}
							onChange={handleMaxPriceChange}
							startAdornment={
								<InputAdornment sx={sx.inputAdornment} position="start">
									<Typography color="textPrimary" variant="body2">
										$
									</Typography>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>
			)}
		</Box>
	)
}

export default PriceRangeInput

const sx = {
	slider: {
		px: 3,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '144px',
		width: {
			xs: '250px',
			sm: '342px',
		},
	},
	priceInputs: {
		mt: 2,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	inputAdornment: {
		color: 'text.primary',
	},
	to: {
		mx: 2,
	},
}
