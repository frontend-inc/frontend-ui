import React, { useEffect, useState } from "react";
import { useGooglePlaces } from "../../../hooks";
import { TextInput } from '../../../components'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'
import { 
  Stack,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const LocationInput: React.FC<TextInputPropsType> = (props) => {
  
  const { 
    name='location', 
    value='', 
    label,
    placeholder="Search location",
    handleChange, 
    direction='column' 
  } = props || {};

  const { 
    loading, 
    places, 
    fetchPlaces 
  } = useGooglePlaces();

  const [keywords, setKeywords] = useState(value)
	const [debouncedValue] = useDebounce(keywords, 500)

  const handleKeywordChange = (ev) => {
    const { value } = ev.target;
    setKeywords(value)
    if(options?.length > 0) setOpen(true);
  };

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
    fetchPlaces(debouncedValue);
  }, [debouncedValue])

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    if (places?.length > 0) {
      setOptions(places?.map((place) => ({ 
        label: place?.formattedAddress, 
        value: place?.formattedAddress
      })));
    }else{
      setOpen(false)      
    }
  }, [places])

  return (
    <Stack width={'100%'} direction="column">
      <TextInput 
        name={name}
        label={label}
        value={keywords}
        options={options}
        handleChange={handleKeywordChange}
        direction={direction}
        placeholder={ placeholder }
      />
      { open && (
      <Box sx={sx.container}>
        <List 
          dense 
          disablePadding
          sx={ sx.list }
        >
        { options?.map((option, index) => (
          <ListItem disableGutters>
            <ListItemButton sx={ sx.listItemButton } onClick={() => handleClick(option) }>
              <ListItemText primary={option.label} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Box>
      )}
    </Stack>
  );
};
export default LocationInput;

const sx = {
  container: {
    position: 'relative',
    width: '100%',
  },
  list: {
    bgcolor: 'background.paper',    
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1
  },
  listItemButton: {
    px: 1,
  }
}