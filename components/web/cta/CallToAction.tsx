'use client'

import React from 'react'
import { Heading, Row, Stack } from '../../../components'
import { ButtonType } from '../../../types'
import { ButtonActions } from '../..'

export type CallToActionProps = {
  direction?: 'row' | 'column'  
	label?: string
	title: string
	subtitle: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	buttons: ButtonType[]	
}

// Call To Action
const CallToAction: React.FC<CallToActionProps> = (props) => {
	const { direction='column', label, title, subtitle, size = 'lg', buttons = [] } = props || {}

	return (
		<Stack direction={direction}>
      <Row size="1/3">
        <Heading
          label={label}
          title={title}
          subtitle={subtitle}
          size={size}
          textAlign="center"
        />
      </Row>
      <Row size="2/3">
        {buttons?.length > 0 && (
          <ButtonActions 
            buttons={buttons} 
            size="lg" 
            justifyContent="justify-center" 
          />
        )}
      </Row>
    </Stack>		
	)
}

export default CallToAction
