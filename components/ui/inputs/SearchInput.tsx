import React, { useState, useEffect } from 'react'
import { Typography, Paper } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { Icon } from '../../../components'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';

type SearchInputProps = {
	name?: string
	label?: string
	value: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	handleSearch: (keywords: string) => void
	styles?: any
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	const {
		name = 'keywords',
		label,
		value,
		placeholder = 'Search...',
		handleChange,
		handleSearch,
		styles = {},
	} = props

	const [text, setText] = useState(value)
	const [debouncedValue] = useDebounce(text, 500)

	const handleInputChange = (e) => {
		setText(e.target.value)
	}

	useEffect(() => {
		if (debouncedValue !== value) {
			handleChange({
				target: {
					name,
					value: debouncedValue,
				},
			})
		}
	}, [debouncedValue])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<Paper
      component="form"
      sx={sx.root}
    >      
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder={ placeholder }
        value={text}
        onChange={ handleInputChange }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(text)
          }
        }}
      />
      <IconButton 
        onClick={() => handleSearch(debouncedValue)}
        type="button" sx={{ p: '10px' }} aria-label="search">
        <Icon name="Search" size={20} color='text.secondary' />
      </IconButton>
    </Paper>
	)
}

export default SearchInput

const sx = {
  root: { 
    p: 0, 
    display: 'flex', 
    alignItems: 'center', 
    width: '100%', 
    maxWidth: 400,
    minWidth: {
      sm: 320,
      xs: "100%"
    } 
  }
}

