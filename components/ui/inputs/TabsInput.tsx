import React from 'react'
import { Stack, Typography } from '@mui/material'
import { ButtonTabs } from '../../../components'
import { SyntheticEventType } from '../../../types'
import sx from './styles'

type TabsInputProps = {  
  name: string
  label?: string
  handleChange: (ev: SyntheticEventType) => void
  options: {
    icon?: string 
    label?: string
    value: number | string | boolean
  }[]
  value: number | string | boolean
  disablePadding?: boolean
  disableBorder?: boolean
  iconPosition?: 'start' | 'end' | 'top' | 'bottom'
  variant?: 'fullWidth' | 'scrollable'
  size?: 'small' | 'large' 
  direction?: 'row' | 'column'
}

const TabsInput: React.FC<TabsInputProps> = (props) =>{

  const { 
    name,
    label,
    disablePadding=false, 
    disableBorder=false, 
    handleChange, 
    options, 
    value,
    iconPosition='start',
    variant="fullWidth",
    size="large",
    direction="row"
  } = props

  const handleInputChange = (value: number | string) => {
    handleChange({
      target: {
        name,
        value
      }    
    })
  }

  return(
    <Stack
				sx={{
					...sx.stack,
					...(direction == 'row' && sx.stackVertical),
				}}
				direction={direction}
				spacing={1}
			>
				{label && (
					<Typography sx={sx.label} variant="caption" color="text.secondary">
						{label}
					</Typography>
				)}
      <ButtonTabs 
        options={ options }
        value={ value }
        iconPosition={ iconPosition }
        variant={ variant }
        size={ size }
        handleChange={ handleInputChange }
        disableBorder={ disableBorder }
        disablePadding={ disablePadding }
      />    
    </Stack>
  )
}

export default TabsInput
