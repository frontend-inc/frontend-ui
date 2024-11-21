'use client'

import React from 'react'
import { Heading, Stack } from '../../../components'
import { ButtonType } from '../../../types'
import { ButtonActions } from '../..'

export type CallToActionProps = {
  direction?: 'row' | 'column'  
  split?: '1/2' | '1/3' | '1/4' 
	label?: string
	title: string
	subtitle: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	buttons: ButtonType[]	
}

// Call To Action
const CallToAction: React.FC<CallToActionProps> = (props) => {
	const { direction='column', split='1/3', label, title, subtitle, size = 'lg', buttons = [] } = props || {}

	return (
		<Stack direction={direction} split={split}>
      <Heading
        label={label}
        title={title}
        subtitle={subtitle}
        size={size}
        textAlign="center"
      />
      {buttons?.length > 0 && (
        <ButtonActions buttons={buttons} size="lg" justifyContent="center" />
      )}
    </Stack>		
	)
}

export default CallToAction
