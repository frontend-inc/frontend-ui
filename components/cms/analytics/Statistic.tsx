import React from 'react'
import { 
  Stack,
  Box,
  Typography  
} from '@mui/material'

export type StatisticProps = {
  value: number
  label: string
  icon?: any
  enableBorder?: boolean
}

export const Statistic: React.FC<StatisticProps> = (props) => {
  const { value, label, icon, enableBorder = false } = props

  return (
    <Box
      sx={{        
        ...sx.root,
        ...(enableBorder && sx.rootBorder)
      }}
    >
      <Typography variant="h6" color="textPrimary">
        {value}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
    </Box>
  )
}

export default Statistic

const sx = {
  root: {
    borderRadius: 1,
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  rootBorder: {
    border: '1px solid',
    borderColor: 'divider'
  }
}