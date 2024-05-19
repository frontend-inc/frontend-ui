import React from 'react'
import { Tab, Tabs } from '@mui/material'
import { Icon } from '../../../components'
type ButtonGroupProps = {  
  handleChange: (newValue: number) => void
  tabs: {
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
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) =>{

  const { 
    disablePadding=false, 
    disableBorder=false, 
    handleChange, 
    tabs, 
    value,
    iconPosition='start',
    variant="fullWidth",
    size="large" 
  } = props

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    handleChange(newValue)
  }

  return(
    <Tabs
      variant={variant}
      sx={{ 
        ...sx.root,
        ...(!disableBorder && sx.rootBorder),
        p: disablePadding ? 0 : '5px',
        '& .MuiTab-root': {     
          height: size == "small" ? 34 : 36,
        } 
      }}
      value={value}
      onChange={handleInputChange}
      indicatorColor="primary"
      textColor="primary"      
    >
      {tabs.map((tab, i) => (
        <Tab 
          key={i} 
          disableRipple
          iconPosition={iconPosition}
          label={ tab.label } 
          value={ tab.value }
          icon={ tab.icon && <Icon size={20} color='text.secondary' name={ tab.icon } /> }
        />
      ))}
    </Tabs>
  )
}

export default ButtonGroup

const sx = {
  root: {    
    minHeight: 34,    
    borderRadius: 1.5,
    bgcolor: 'background.paper',
    '& svg': {
      mx: 0.5
    }, 
    '& .MuiTabs-indicator': {
      height: "100%",   
      width: "100%",
      borderRadius: 1,   
      bgcolor: 'secondary.main',
      zIndex: 0,
    },
    '& .MuiButtonBase-root': {
      minHeight: 34,
      minWidth: 44,      
      px: 1,    
      zIndex: 1, 
      color: 'common.white', 
    }, 
    '& .MuiTabs-root': {            
      minHeight: 34,
      height: 34,        
    },
		'& .MuiTab-root': {            
      minHeight: 34,
      borderRadius: 1,
      color: 'text.secondary',
			'&.Mui-selected': {
        borderRadius: 1,
        color: 'text.primary',
			},      
		},
	},
  rootBorder: {
    border: '1px solid',
    borderColor: 'divider'
  }
}