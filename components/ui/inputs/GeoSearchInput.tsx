import React, { useState, useEffect } from 'react'
import { Box, Paper } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { Icon } from '../..'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useGooglePlaces } from '../../../hooks'
import LocationOptionsList from './addons/LocationOptionsList'

type GeoSearchInputProps = {
	name?: string
	label?: string
	value: string
  handleChange: (e: SyntheticEventType) => void
  location: string
  handleLocationChange: (e: SyntheticEventType) => void
	placeholder?: string
  fullWidth?: boolean	
	handleSearch: (keywords: string, location: string) => void  
	styles?: any
}

const GeoSearchInput: React.FC<GeoSearchInputProps> = (props) => {
	const {
		name = 'keywords',
		fullWidth=false,
		value,
    location='',
		placeholder = 'Search...',
		handleChange,
    handleLocationChange,
		handleSearch,
	} = props

  const { 
    loading, 
    placeOptions,
    fetchPlaces 
  } = useGooglePlaces()

  const [open, setOpen] = useState(false)
	const [text, setText] = useState(value)
  const [debouncedText] = useDebounce(text, 500)
	const handleInputChange = (e) => {
		setText(e.target.value)
	}

  const [locationText, setLocationText] = useState(location)
  const [debouncedLocationText] = useDebounce(locationText, 150)
  const handleLocationInputChange = (e) => {
    let value = e.target.value
    setLocationText(value)
    if(value.length == 0){
      setOpen(false)
      return;
    }
    if (placeOptions?.length > 0) {
			setOpen(true)
		}
  }

  const handleClick = (option) => { 
    setOpen(false)    
    setLocationText(option?.value)
  }

	useEffect(() => {
		if (debouncedText !== value) {
			handleChange({
				target: {
					name,
					value: debouncedText,
				},
			})
		}
	}, [debouncedText])

  useEffect(() => {
		if (debouncedLocationText !== location) {
      fetchPlaces(debouncedLocationText)
			handleLocationChange({
				target: {
					name,
					value: debouncedLocationText,
				},
			})
		}
	}, [debouncedLocationText])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
    <Box>
      <Paper
        component="form"
        elevation={0}
        sx={{ 
          ...sx.root,
          ...(fullWidth && sx.fullWidth)
        }}
      >      
        <InputBase
          sx={ sx.inputBase }
          placeholder={ placeholder }
          value={text}
          onChange={ handleInputChange }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch(text, locationText)
            }
          }}
        />
        <Divider sx={ sx.divider } orientation="vertical" />
        <InputBase
          sx={ sx.inputBase }
          placeholder={'Location...'}
          value={locationText}
          onChange={ handleLocationInputChange }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch(text, locationText)
            }
          }}
        />
        <Divider sx={ sx.divider } orientation="vertical" />
        <IconButton 
          onClick={() => handleSearch(text, locationText)}
          type="button" sx={ sx.iconButton } aria-label="search">
          <Icon name="Search" size={20} color='text.secondary' />
        </IconButton>
      </Paper>
      <LocationOptionsList 
        open={open}
        options={placeOptions}
        handleClick={handleClick}
      />
    </Box>
	)
}

export default GeoSearchInput

const sx = {
  root: { 
    p: 0, 
    display: 'flex', 
    alignItems: 'center', 
    width: '100%', 
    border: '1px solid',
    borderColor: 'divider',
    maxWidth: 400,
    minWidth: {
      sm: 320,
      xs: "100%"
    },
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 1
    }
  },
  inputBase: { 
    ml: 2, 
    flex: 1 
  },
  divider: { 
    height: 28, 
    my: 0.5 
  },
  iconButton: { 
    p: '10px' 
  },
  fullWidth: {
    width: '100%',
    minWidth: '100%'
  },
  locationContainer: {
    position: 'relative',
    width: "100%"
  }
}


