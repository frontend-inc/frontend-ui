'use client'

import React from 'react'
import { Heading, Stack } from '../../../components'
import { ButtonType } from '../../../types'
import { ButtonActions } from '../..'
import { HeadingProps } from '../../../types'
import { cn } from '@nextui-org/react'

export type CallToActionProps = HeadingProps & {
	direction?: 'row' | 'column'
	buttons: ButtonType[]
}

// Call To Action
const CallToAction: React.FC<CallToActionProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		fontSize = 'md',
		buttons = [],
		editable,
		handleChange,
	} = props || {}

	return (
		<Stack 
      direction={direction} 
      className={cn(
        direction == 'row' && 'items-center justify-center',
      )}>
			<Stack direction={direction} size="1/3">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					size={fontSize}
					textAlign={direction == 'row' ? 'left' : 'center'}
					editable={editable}
					handleChange={handleChange}
				/>
			</Stack>
			<Stack 
        direction={direction} 
        size="2/3"
        className={cn(
          'w-full',
          direction == 'row' && 'items-center justify-center',
        )}
      >
				{buttons?.length > 0 && (
					<ButtonActions
						buttons={buttons}
						size="lg"
						justifyContent="justify-center"
					/>
				)}
			</Stack>
		</Stack>
	)
}

export default CallToAction
