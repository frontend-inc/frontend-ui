import React from 'react'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { Icon } from '../../../../components'

type InputLabelProps = {
  label?: string
  info?: string
}

const InfoLabel: React.FC<InputLabelProps> = (props) => {
  const { label, info } = props
  
  return(
    <Box sx={sx.root}>
      {label && (
        <Typography variant="caption" color="text.secondary">
          {label}           
        </Typography>
      )}
      { info && (
        <Tooltip title={info}>
          <IconButton size="small">
            <Icon name="Info" size={16} color='text.secondary' />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

export default InfoLabel 

const sx = {
  root: {
		minWidth: '110px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
	}
}
