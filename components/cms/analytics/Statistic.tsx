import React from 'react'
import { 
  Stack,
  Box,
  Typography  
} from '@mui/material'
import { Icon } from '../../../components'

export type StatisticProps = {
  value: number
  label: string
  icon?: any
  direction?: 'row' | 'column'
  enableBorder?: boolean
}

export const Statistic: React.FC<StatisticProps> = (props) => {
  const { value, label, icon, direction="row", enableBorder = false } = props

  return (
    <Stack 
      spacing={1}
      direction={ direction }
      sx={{        
        ...sx.root,
        ...(enableBorder && sx.rootBorder)
      }}
    >
      <Box>
        <Icon name={icon} size={24} />
      </Box>
        <Typography variant="h6" color="textPrimary">
          {value}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {label}
        </Typography>
    </Stack>
  )
}

export default Statistic

const sx = {
  root: {
    borderRadius: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  rootBorder: {
    border: '1px solid',
    borderColor: 'divider'
  }
}