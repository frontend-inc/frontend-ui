'use client'

import React from 'react'
import { useAdmin } from '../../../hooks'
import { IconButton } from '../../core'
import { Icon } from '../..'

const ExpandMobileLeftButton: React.FC = () => {
	const { setOpenMobileLeft } = useAdmin()
	return ( 
    <div className="block sm:hidden"> 
      <IconButton onClick={() => setOpenMobileLeft(true)}>
        <Icon name="Menu" />
      </IconButton>    
    </div>
	)
}

export default ExpandMobileLeftButton
