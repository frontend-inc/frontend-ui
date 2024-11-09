'use client'

import React from 'react'
import { Heading } from '../../../components'
import { ButtonType } from '../../../types'
import { ButtonActions } from '../..'

export type CallToActionProps = {
	label?: string
	title: string
	description: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	buttons: ButtonType[]
	direction?: string
}

// Call To Action
const CallToAction: React.FC<CallToActionProps> = (props) => {
	const {
    label, 
    title, 
    description, 
    size='lg', 
    buttons=[] 
  } = props || {}

	return (
		<div className="w-full">
			<div className="flex flex-col items-center space-y-2">
        <Heading 
          label={label}
          title={title}
          description={description}
          size={size}
          textAlign='center'
        />
				{buttons?.length > 0 && (
          <ButtonActions
            buttons={buttons}
            size="lg"
            justifyContent="center"
          />
				)}
			</div>
		</div>
	)
}

export default CallToAction
