import React, { useEffect, useState } from 'react'
import { Stack, Typography, Box, Slider } from '@mui/material'
import * as COLORS from '@mui/material/colors'
import { TextInput } from '../../../components'
import { SyntheticEvent } from '../../../types'
import { MUI_COLORS, HEX_COLORS } from '../../../constants/index'

type ColorInputProps = {
	errors?: any
	name: string
	value: string
	handleChange: (e: SyntheticEvent) => void
	component?: any
	disableTone?: boolean
}

const ColorInput: React.FC<ColorInputProps> = (props) => {
	const { name, value, disableTone = false, handleChange } = props

	const [tone, setTone] = useState(500)
  const [color, setColor] = useState(null)
	const [hex, setHex] = useState(value || '')
  const [text, setText] = useState(value || '')

	const handleToneChange = (event, newTone) => {
		setTone(newTone)    
	}

	const handleColorChange = (color) => {
    setColor(color)
	}

	const handleHexColorChange = (hexColor) => {
		setHex(hexColor)
	}

  const handleTextChange = (ev) => {
    let { value } = ev.target
    if(!value.startsWith('#')){
      value = `#${value}`
    }
    if(value?.length == 7){
      setHex(value)      
    }
  }

	useEffect(() => {
		if (value) {
			setHex(value)
      setText(value)
		}
	}, [value])

  useEffect(() => {
		if (color && tone) {
      const hexColor = COLORS[color][tone]
      setHex(hexColor)
		}
	}, [color, tone])

  useEffect(() => {
    handleChange({
      target: {
        name,
        value: hex,
      },
    })
  }, [hex])

	return (
		<Stack spacing={2} direction="column" sx={sx.root}>
			{!disableTone && (
				<Stack spacing={0} sx={sx.slider}>
					<Typography variant="caption" color="textSecondary">
						Tone
					</Typography>
					<Slider
						aria-label="Tone"
						defaultValue={[100, 900]}
						valueLabelDisplay="auto"
						onChange={handleToneChange}
						step={100}
						min={100}
						max={900}
						value={tone}
					/>
				</Stack>
			)}
			<Box sx={sx.grid}>
				{MUI_COLORS.map((color) => (
					<Box
						sx={{
							...sx.color,
							...(hex == COLORS[color][tone] && sx.selected),
							bgcolor: COLORS[color][tone],
						}}
						onClick={() => handleColorChange(color)}
					/>
				))}
				{HEX_COLORS.map((hexColor) => (
					<Box
						sx={{
							...sx.color,
							...(hex == hexColor && sx.selected),
							bgcolor: hexColor,
						}}
						onClick={() => handleHexColorChange(hexColor)}
					/>
				))}
        	<Box
						sx={{
              ...sx.color,
							...sx.transparent,
							...(hex == '' && sx.selected),		
              bgcolor: '#FFF',					
						}}
						onClick={() => handleHexColorChange('')}
					/>
			</Box>
      <Box sx={sx.input}>
        <TextInput 
          name={name}
          value={text}
          handleChange={handleTextChange}
        />
      </Box>
		</Stack>
	)
}

export default ColorInput

const sx = {
	root: {
		width: '100%',
		mb: 2,
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(7, 1fr)',
		gap: '5px',
	},
	slider: {
		width: '100%',
	},
	color: {
		border: '2px solid transparent',
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
    width: '100%'
  },
  transparent: {
    background: 'linear-gradient(to top left,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),rgba(0,0,0,0.4) 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%)'
  }
}
