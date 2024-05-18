import React from 'react'
import { Tab, Tabs } from '@mui/material'
import { Icon } from '../../../components'
type ButtonGroupProps = {  
  handleChange: (newValue: number) => void
  tabs: {
    icon?: string 
    label?: string
    value: number | string
  }[]
  value: number | string
  disablePadding?: boolean
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) =>{

  const { disablePadding=false, handleChange, tabs, value } = props

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    handleChange(newValue)
  }

  return(
    <Tabs
      variant="fullWidth"
      sx={{ 
        ...sx.root,
        p: disablePadding ? 0 : '5px' 
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
          iconPosition='start'
          label={ tab.label } 
          value={ tab.value }
          icon={ tab.icon && <Icon size={20} name={ tab.icon } /> }
        />
      ))}
    </Tabs>
  )
}

export default ButtonGroup

const sx = {
  root: {    
    minHeight: 36,    
    borderRadius: 1,
    bgcolor: 'secondary.dark',
    '& svg': {
      mx: 0.5
    }, 
    '& .MuiTabs-indicator': {
      height: 34,   
      borderRadius: 1,   
      bgcolor: 'secondary.light',
      zIndex: 0,
    },
    '& .MuiButtonBase-root': {
      height: 34,
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
      minHeight: 36,
      height: 36,
      borderRadius: 1,
			'&.Mui-selected': {
        borderRadius: 1,
			},
      
		},
	},
}