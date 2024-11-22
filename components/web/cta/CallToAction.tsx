'use client'

import React from 'react'
import { Heading, Stack } from '../../../components'
import { ButtonType } from '../../../types'
import { ButtonActions } from '../..'
import { HeadingProps } from '../../../types'

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
		fontSize = 'lg',
		buttons = [],
		editable,
		handleChange,
	} = props || {}

	return (
		<Stack direction={direction}>
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
			<Stack direction={direction} size="2/3">
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
