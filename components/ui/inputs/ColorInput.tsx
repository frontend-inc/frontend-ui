import React, { useEffect, useState } from 'react'
import {
	Stack,
	Tooltip,
	IconButton,
	Button,
	Typography,
	Box,
	Slider,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import * as COLORS from '@mui/material/colors'
import { InputLabel, Popup, TextInput } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { useMenu } from '../../../hooks'
import { MUI_COLORS, HEX_COLORS } from '../../../constants/index'

type TransparentColorProps = {
	value?: string
	handleClick?: (e: any) => void
}

const TransparentColor: React.FC<TransparentColorProps> = (props) => {
	const { value = 'Ban', handleClick } = props
	return (
		<Tooltip title="Transparent">
			<Box
				sx={{
					...sx.color,
					...sx.transparent,
					...(value == '' && sx.selected),
					bgcolor: '#FFF',
				}}
				onClick={handleClick}
			/>
		</Tooltip>
	)
}

type ColorInputProps = {
	label?: string
	placeholder?: string
	name: string
	value: string
	handleChange: (e: SyntheticEventType) => void
	errors?: any
	disableTone?: boolean
	info?: string
}

const ColorInput: React.FC<ColorInputProps> = (props) => {
	const {
		label,
		name,
		value,
		placeholder = 'Color',
		disableTone = false,
		handleChange,
		info,
	} = props

	const [tone, setTone] = useState(500)
	const [hex, setHex] = useState(value || '')
	const [text, setText] = useState(value || '')

	const { open, anchorEl, openMenu, closeMenu } = useMenu()

	const handleToneChange = (ev, newTone) => {
		setTone(newTone)
	}

	const handleColorChange = (color) => {
		const hexColor = COLORS[color][tone]
		handleChange({
			target: {
				name,
				value: hexColor,
			},
		})
		setHex(hexColor)
		closeMenu()
	}

	const handleHexColorChange = (hexColor) => {
		handleChange({
			target: {
				name,
				value: hexColor,
			},
		})
		setHex(hexColor)
		closeMenu()
	}

	const handleTextChange = (ev) => {
		let { value } = ev.target
		if (!value.startsWith('#')) {
			value = `#${value}`
		}
		if (value?.length == 7) {
			handleChange({
				target: {
					name,
					value,
				},
			})
		}
	}

	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			<InputLabel label={label} info={info} />
			<Button
				sx={sx.button}
				fullWidth
				variant="contained"
				color="secondary"
				endIcon={
					<Stack direction="row" spacing={0}>
						<Tooltip title={value}>
							<IconButton>
								{value ? (
									<Box
										sx={{
											...sx.color,
											bgcolor: value,
										}}
									/>
								) : (
									<TransparentColor value={value} handleClick={openMenu} />
								)}
							</IconButton>
						</Tooltip>
						<IconButton size="small">
							<ExpandMore />
						</IconButton>
					</Stack>
				}
				onClick={openMenu}
			>
				{placeholder}
			</Button>
			<Popup open={open} anchorEl={anchorEl} handleClose={closeMenu}>
				<Stack spacing={2} direction="column" sx={sx.root}>
					<Box sx={sx.grid}>
						{HEX_COLORS.map((hexColor) => (
							<Tooltip title={hexColor.label}>
								<Box
									sx={{
										...sx.color,
										...(hex == hexColor?.value && sx.selected),
										bgcolor: hexColor?.value,
									}}
									onClick={() => handleHexColorChange(hexColor?.value)}
								/>
							</Tooltip>
						))}
						<TransparentColor
							value={hex}
							handleClick={() => handleHexColorChange('')}
						/>
					</Box>
					<Box sx={sx.grid}>
						{MUI_COLORS.map((color) => (
							<Tooltip title={color} key={color}>
								<Box
									sx={{
										...sx.color,
										...(hex == COLORS[color][tone] && sx.selected),
										bgcolor: COLORS[color][tone],
									}}
									onClick={() => handleColorChange(color)}
								/>
							</Tooltip>
						))}
					</Box>
					{!disableTone && (
						<Stack spacing={0} sx={sx.slider}>
							<Typography variant="caption" color="textSecondary">
								Color tone
							</Typography>
							<Slider
								aria-label="Color tone"
								defaultValue={[100, 900]}
								onChange={handleToneChange}
								step={100}
								min={100}
								max={900}
								value={tone}
							/>
						</Stack>
					)}
					<Box sx={sx.input}>
						<TextInput
							name={name}
							value={text}
							handleChange={handleTextChange}
						/>
					</Box>
				</Stack>
			</Popup>
		</Stack>
	)
}

export default ColorInput

const sx = {
	root: {
		width: '100%',
	},
	button: {
		py: 0,
		justifyContent: 'space-between',
		border: '2px solid',
		borderColor: 'divider',
		color: 'text.primary',
		bgcolor: 'background.paper',
		fontSize: (theme) => theme.typography.body1.fontSize,
		fontWeight: (theme) => theme.typography.body1.fontWeight,
		'&:hover': {
			bgcolor: 'background.paper',
			borderColor: 'primary.main',
		},
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(7, 1fr)',
		gap: '4px',
	},
	slider: {
		width: '100%',
	},
	color: {
		border: '2px solid',
		borderColor: 'divider',
		borderRadius: '8px',
		height: '32px',
		width: '32px',
		transition: 'all 0.3s ease',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},
	selected: {
		borderColor: 'common.white',
	},
	input: {
		width: '100%',
	},
	transparent: {
		background:
			'linear-gradient(to top left,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),rgba(0,0,0,0.4) 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%)',
	},
}
