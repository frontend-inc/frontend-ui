'use client'

import React from 'react'
import { useAdmin } from '../../../hooks'
import { IconButton } from '../../core'
import { Icon } from '../..'

const ExpandMobileRightButton: React.FC = () => {
	const { setOpenMobileRight } = useAdmin()
	return (
    <div className="block sm:hidden">
      <IconButton onClick={() => setOpenMobileRight(true)}>
        <Icon name="Menu" />
      </IconButton>
    </div>    
	)
}

export default ExpandMobileRightButton
