import React, { useState } from 'react'
import { Box, Stack, IconButton, Button, iconButtonClasses } from '@mui/material'
import { InputLabel, TextInput, Icon } from 'frontend-ui/components'
import PageLinkInputModal from './PageLinkInputModal'
import { SyntheticEventType } from 'frontend-js'

type LinkInputProps = {
  name: string
  value: string | number
  handleChange: (event: SyntheticEventType) => void
  label?: string
  info?: string
}

const PageLinkInput: React.FC<LinkInputProps> = (props) => {

  const {
    name='path',
    value, 
    handleChange,
    label,
    info,
  } = props || {}

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleLinkClick = (path) => {
    handleChange({
      target: {
        name,
        value: path
      }
    })
    setOpen(false)
  }

  return(
    
    <Stack direction="row" alignItems='center' spacing={1}>
      <InputLabel label={label} info={info} />
      <Stack direction="row" spacing={1} alignItems='center'>
        <TextInput 
          name={name}
          value={value}
          handleChange={handleChange}
        />
        <IconButton 
          sx={ sx.iconButton }
          onClick={ handleClick }
        > 
          <Icon name="Plus" />
        </IconButton>
      </Stack>
      <PageLinkInputModal 
        open={open}
        handleClose={() => setOpen(false)}
        value={value}
        handleClick={ handleLinkClick }
      />
    </Stack>
  )
}

export default PageLinkInput

const sx = {
  iconButton: {    
    height: 40,    
    bgcolor: 'background.paper',
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    '&:hover': {
      bgcolor: 'background.paper',
    }
  }
}