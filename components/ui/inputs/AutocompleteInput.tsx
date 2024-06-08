import React, { useState } from "react";
import { TextInput, Icon } from '../..'
import {
  Avatar, 
  Paper,
  Stack,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TextInputPropsType } from '../../../types'

type AutocompleteInput = TextInputPropsType & {
  handleInputChange: (keywords: string) => void
}

const AutocompleteInput: React.FC<AutocompleteInput> = (props) => {
  
  const { 
    name='title', 
    value='', 
    label,
    placeholder="Search",
    handleChange, 
    handleInputChange,
    options=[],
    direction='column',
  } = props || {};
  
  const [open, setOpen] = useState(false)

  const handleClick = (option) => {
    console.log('handleClick', option)
    setOpen(false)
    handleChange({
      target: {
        name: name,
        value: option?.value,
      },
    })
  }  

  const handleKeywordChange = (ev) => {
    let { value } = ev.target;
    handleInputChange(value)
    if(options?.length > 0) setOpen(true);
    if(value == '') setOpen(false)
  }

  return (
    <Stack width={'100%'} direction="column" spacing={1}>     
      <TextInput 
        name={name}
        label={label}
        value={value}
        options={options}
        handleChange={handleKeywordChange}
        direction={direction}
        placeholder={ placeholder }
        onFocus={() => setOpen(true)}
      />
      <Box sx={ sx.anchor }>
      { open && (
        <Paper 
          elevation={2} 
          sx={{
            ...sx.paper,
            height: (options?.length * 64)
          }}
        >
          <List 
            dense 
            sx={ sx.list }
          >
          { options?.map((option, index) => (
            <ListItem disableGutters>
              <ListItemButton sx={ sx.listItemButton } onClick={() => handleClick(option) }>                
                <ListItemIcon sx={{ mr: 2 }}>
                  { option?.image && (
                    <Avatar 
                      alt={ option.label }
                      src={ option.image }
                      sx={ sx.avatar }
                    />
                  )}
                  { option?.icon && (
                    <Icon name={ option.icon } size={20} />
                  )}
                  </ListItemIcon>
                <ListItemText 
                  primary={
                    option.label
                  }                   
                />
              </ListItemButton>
            </ListItem>
          ))}
          </List>
        </Paper>
        )}
      </Box>
    </Stack>
  );
};
export default AutocompleteInput;

const sx = {
  anchor: {
    position: 'relative',
  },
  paper: {
    p: 2,
    position: 'absolute',
    top: -10,
    left: 0,
    width: '100%',
    borderRadius: theme => `${theme.shape.borderRadius}px`,
    maxHeight: '220px',
    overflowY: 'scroll',
  },
  avatar: {
    borderRadius: 1,
    mr: 2
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
    py: 0
  },
  mapContainer: {
    overflow: 'hidden',
  }
}